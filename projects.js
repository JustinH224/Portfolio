
const PROJECTS = [
  {
    slug: "autonomous-drone",
    title: "Autonomous Quadcopter Drone",
    category: "Robotics / Embedded Systems",
    year: "2026",
    summary: "Autonomous quadcopter integrating STM32 flight control, MAVLink telemetry, Raspberry Pi video, and YOLO-based object detection.",
    image: "drone-main.jpeg",
    imageAlt: "Autonomous quadcopter on a work table",
    demoUrl: "https://youtube.com/shorts/QbR_BUqkFbw",
    gallery: [
      {
        src: "drone-angle.jpeg",
        alt: "Second angle of the autonomous quadcopter",
        caption: "Integrated quadcopter hardware showing the flight stack, wiring, radio hardware, and propulsion system."
      },
      {
        src: "controller.jpeg",
        alt: "Radio controller used with the drone",
        caption: "Radio controller used during manual testing and flight setup."
      },
      {
        src: "mission-planner.png",
        alt: "Mission Planner ground station interface",
        caption: "Mission Planner ground station used with ArduPilot for configuration and flight-system monitoring."
      }
    ],
    tags: ["STM32", "ArduPilot", "MAVLink", "ESP32", "Raspberry Pi", "YOLO", "Python", "ExpressLRS"],
    metrics: [
      ["STM32", "flight controller"],
      ["MAVLink", "telemetry protocol"],
      ["YOLO", "computer vision"],
      ["ArduPilot", "flight firmware"]
    ],
    overview: "This project combines flight control, wireless telemetry, computer vision, and networked command execution in one autonomous hardware platform. The aircraft uses an STM32-based flight controller running ArduPilot, an ESP32-based telemetry link, and a Raspberry Pi camera pipeline for remote vision processing.",
    highlights: [
      "Configured ArduPilot on an STM32 flight controller and integrated onboard sensing and motor control.",
      "Built ESP32 Wi-Fi telemetry using UART and MAVLink over UDP for ground-station communication.",
      "Integrated ExpressLRS radio control and completed physical flight testing.",
      "Streamed Raspberry Pi camera video to a remote computer for YOLO-based object detection.",
      "Debugged telemetry wiring, networking/firewall issues, radio setup, and motor-direction configuration during integration."
    ],
    architecture: [
      "Remote laptop / cloud — YOLO + control logic",
      "Wi-Fi / UDP network",
      "Raspberry Pi camera + Python",
      "ESP32 telemetry bridge — UART + MAVLink",
      "STM32 flight controller — ArduPilot",
      "ESCs + BLDC motors + GPS + IMU/barometer"
    ]
  },
  {
    slug: "hyperspectral-research",
    title: "Hyperspectral Wildfire Research",
    category: "Research / Computer Vision",
    year: "2026",
    summary: "Python-based processing and alignment of VNIR/SWIR hyperspectral imagery for material classification in wildfire-prone regions.",
    image: "",
    imageAlt: "Hyperspectral imaging research project",
    tags: ["Python", "NumPy", "OpenCV", "VNIR", "SWIR", "Image Processing"],
    metrics: [
      ["VNIR", "sensor data"],
      ["SWIR", "sensor data"],
      ["Python", "processing"],
      ["OpenCV", "analysis"]
    ],
    overview: "Research work centered on extracting, aligning, validating, and visualizing hyperspectral sensor data. The goal is to improve material identification and reduce false positives in wildfire-related imagery.",
    highlights: [
      "Developed Python-based band-selection and template-matching workflows.",
      "Aligned multi-resolution VNIR and SWIR data for combined spectral analysis.",
      "Generated diagnostic plots with Matplotlib, NumPy, and OpenCV.",
      "Validated geospatial and spectral mappings before relying on downstream classification."
    ],
    architecture: [
      "VNIR / SWIR sensor imagery",
      "Coordinate alignment",
      "Spectral extraction",
      "Band selection / template matching",
      "Material classification + validation"
    ]
  }
];
