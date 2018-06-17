import ml5 from 'ml5'

let w = window.innerWidth - 190
let h = window.innerHeight - 80
// let w = 1250;
// let h = 700;
let video;
let poseNet;
let poses = [];
// let skeletons = [];


function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

function isiOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isMobile() {
  return isAndroid() || isiOS();
}

export default function (p) {
  let onReady = () => {};
  let props = {};

  p.setOnReady = function(cb) {
    onReady = cb;
  };

  p.pushProps = function (_props) {
    props = _props;
  }
  // console.log(isMobile())


  let dog
  p.preload = function () {
    dog = p.createImg('../public/runningdog_2.png')
    // dog.position(-200, 350)
    dog.style('z-index', '1')
    dog.hide()
  }

  p.setup = function () {
    p.image(dog, -200, 350)
    const mobile = isMobile()
    const canvas = p.createCanvas(w, h);
    canvas.style('margin', '0 auto')
    // canvas.style('z-index', '0' )
    // canvas.position(50, 50)
    canvas.id('vidCanvas')
    video = p.createCapture({
      audio: false,
      video: {
        facingMode: mobile ? {exact: 'environment'} : 'user',
        width: mobile ? undefined : w,
        height: mobile ? undefined : h,
      }
    });

    // Create a new poseNet method with a multiple detection
    const options = {
      imageScaleFactor: 0.3,
      outputStride: 16,
      flipHorizontal: false,
      minConfidence: 0.6,
      maxPoseDetections: 5,
      scoreThreshold: 0.5,
      nmsRadius: 20,
      detectionType: 'multiple',
      multiplier: 0.75,
    }

    poseNet = ml5.poseNet(video, options, p.gotPoses);

    // Hide the video element, and just show the canvas
    video.hide();
    p.fill(25, 159, 255);
    p.strokeWeight(1);
    p.stroke(222, 255, 255);
  }

  //draws the video in the canvas
  p.draw = function () {
    p.image(video, 0, 0, w, h);
    // We can call both functions to draw all keypoints and the skeletons
    p.drawKeypoints();
    // p.drawSkeleton();
    p.drawLeash()
    onReady()
    // console.log('poses: ', poses)
  }

  // A function to draw ellipses over the detected keypoints
  p.drawKeypoints = function() {
    // Loop through all the poses detected
    // console.log('poses: ', poses)
    for(let i = 0; i < poses.length; i++) {
      // For each pose detected, loop through all the keypoints
      for(let j = 0; j < poses[i].pose.keypoints.length; j++) {
        // A keypoint is an object describing a body part (like rightArm or leftShoulder)
        let keypoint = poses[i].pose.keypoints[j];
        // console.log(keypoint)


        // if (keypoint.score > 0.2 && keypoint.part === 'leftEar') {
        //   myDiv0 = createDiv('this is div 0')
        //   myDiv0.position(keypoint.position.x + 10, keypoint.position.y + 40)
        //   myDiv0.style("color", "#FFFFFF")
        // }
        // // Only draw an ellipse is the pose probability is bigger than 0.2
        // if (keypoint.score > 0.2) {
        //   ellipse(keypoint.position.x, keypoint.position.y, 20, 20);
        // }
        if (keypoint.score > 0.3 && keypoint.part === 'nose') {
          dog.show()
          dog.position(keypoint.position.x + 100, 350)
          p.ellipse(keypoint.position.x + 200, keypoint.position.y - 150, 20, 20)
          break
        } else {
          dog.hide()
        }
      }
    }
  }

  // A function to draw the skeletons
  p.drawSkeleton = function () {
    // Loop through all the skeletons detected
    for(let i = 0; i < poses.length; i++) {
      // For every skeleton, loop through all body connections
      for(let j = 0; j < poses[i].skeleton.length; j++) {

        let partA = poses[i].skeleton[j][0];
        let partB = poses[i].skeleton[j][1];
        p.line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
      }
    }
  }

  p.drawLeash = function () {
    for(let i = 0; i < poses.length; i++) {
      let wrist
      // For every skeleton, loop through all body connections
      for(let j = 0; j < poses[i].skeleton.length; j++) {
        // console.log('poses[i].skeleton: ', poses[i].skeleton)
        // console.log('poses[i].skeleton[j]', poses[i].skeleton[j])
        if (poses[i].skeleton[j].part === 'leftWrist' || poses[i].skeleton[j].part === 'rightWrist') {
          wrist = poses[i].skeleton[j]
          // console.log(wrist)
          p.line(wrist.position.x, wrist.position.y, wrist.position.x + 30, 350);
        }
      }
    }
  }

  // The callback that gets called every time there's an update from the model
  p.gotPoses = function (results) {
    poses = results;
  }
}
