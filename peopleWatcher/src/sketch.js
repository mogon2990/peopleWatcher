import ml5 from 'ml5'
import marker from './icons/marker.png'
import doggy from  './characters/doggy.gif'

let w = window.innerWidth - 190
let h = window.innerHeight - 80
// let w = 1250;
// let h = 700;
let video;
let poseNet;
let poses = [];
// let skeletons = [];

//hi
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
  let markers = []
  let characters = []


  p.setOnReady = function(cb) {
    onReady = cb;
  };

  p.pushProps = function (_props) {
    props = _props;
  }
  // console.log(isMobile())


  let dog
  let doggy1
  // eventually 5 markers
  let marker1
  let marker2
  p.preload = function () {
    marker1 = p.createImg(marker)
    marker1.hide()
    markers.push(marker1)
    // marker2 = p.createImg(marker)
    // marker2.hide()
    // markers.push(marker2)
    doggy1 = p.createImg(doggy)
    doggy1.hide()
    characters.push({name: 'doggy1', src: doggy1})
  }

  p.setup = function () {
    // p.image(dog, -200, 350)
    // p.image(marker1, 50, 50)
    // p.image(marker2, 100, 100)
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
      minConfidence: 0.7,
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
    // console.log('poses: ', poses)
    p.image(video, 0, 0, w, h);
    // We can call both functions to draw all keypoints and the skeletons
    p.drawKeypoints();
    // p.drawSkeleton();
    onReady()
    // console.log('sketch props', props)
    // props.activeElements.forEach( el => {
    //   const item = characters.find( char => {
    //     return el === char.name
    //   })
    //   console.log(item)
    //   item.src.position(50, 50)
    //   item.src.show()
    // //   el.src.show()
    // //   // dog = p.createImg(el)
    // //   // p.image(dog, 50, 50)
    // })
    // console.log('poses: ', poses)
  }

  // A function to draw ellipses over the detected keypoints
  p.drawKeypoints = function() {
    // Loop through all the poses detected
    for(let i = 0; i < poses.length; i++) {
      // For each pose detected, loop through all the keypoints
      for(let j = 0; j < poses[i].pose.keypoints.length; j++) {
        // A keypoint is an object describing a body part (like rightArm or leftShoulder)
        let keypoint = poses[i].pose.keypoints[j];
        // console.log(keypoint)

        // // Only draw an ellipse is the pose probability is bigger than 0.2
        if (keypoint.score > 0.3 && keypoint.part === 'nose') {
          markers[i] && markers[i].show()
          markers[i] && markers[i].position(keypoint.position.x + 150, keypoint.position.y - 150)
          // p.ellipse(keypoint.position.x + 200, keypoint.position.y - 150, 20, 20)

          //the following is hardcoded: will not be in the future
          props.activeElements[0] &&
            characters[0] &&
              characters[0].src.position(keypoint.position.x, 700)
            props.activeElements[0] &&
              characters[0] &&
              characters[0].src.show()

          break
        } else {
          markers[i] && markers[i].hide()
        }
      }
    }
  }

  // A function to draw the skeletons
  // p.drawSkeleton = function () {
  //   // Loop through all the skeletons detected
  //   for(let i = 0; i < poses.length; i++) {
  //     // For every skeleton, loop through all body connections
  //     for(let j = 0; j < poses[i].skeleton.length; j++) {
  //       let partA = poses[i].skeleton[j][0];
  //       let partB = poses[i].skeleton[j][1];
  //       p.line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
  //     }
  //   }
  // }

  // The callback that gets called every time there's an update from the model
  p.gotPoses = function (results) {
    poses = results;
  }
}
