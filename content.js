// 교수님용 홈페이지 글 · 변경은 큰따옴표 안의 내용만 수정하세요.
window.PORTFOLIO_CONTENT = {
  "profile": {
    "name": "Chaeun Lee",
    "affiliation": "Undergraduate · Sungkyunkwan University",
    "portrait": "assets/profilepic.jpg",
    "email": "jenc@g.skku.edu",
    "links": [
      {
        "label": "CV",
        "url": "assets/Chaeun_Lee_CV_for_SNU.pdf"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/clhaeun"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/citations?user=eqDtSA0AAAAJ&hl=ko"
      },
      {
        "label": "Email",
        "url": "mailto:jenc@g.skku.edu"
      }
    ],
    "intro": [
      "I am interested in how world models and embodied agents can reason about uncertain world states, explore multiple solutions, and connect reasoning to action.",
      "My research spans embodied agent recovery, stochastic recursive reasoning, embodied reasoning benchmark design, and VLA inference on NPUs. I am particularly interested in world models and generative policies that enable robots to learn, reason, and act under uncertainty."
    ],
    "interests": [
      "World Models",
      "Embodied AI",
      "Efficient AI Systems"
    ]
  },
  "research": [
    {
      "id": "repairagent",
      "shortTitle": "Embodied planning & recovery",
      "title": "Planning and Recovery under Embodied Failures",
      "subtitle": "RepairAgent · CSI-Agent Lab · ICML 2026",
      "image": "assets/repairagent_icml_panda.png",
      "imageAlt": "Conceptual illustration of robot execution feedback and recovery decisions after a failed action",
      "paragraphs": [
        "I implemented the RepairAgent baseline for our ICML 2026 work and adapted its generate–repair–revise loop to embodied robot control in RLBench and Genesis.",
        "Under partial observability, a failed action may change the scene while leaving some progress intact, and the observed failure point may not fully explain what went wrong. I therefore structured the current scene, object/gripper states, execution history, task constraints, and failure signals as feedback to help infer the current state and decide whether to repair locally, continue from that state, or revise the remaining plan.",
        "This experience led me to questions about how robots can update their understanding of the current state and adapt actions and plans through interaction."
      ],
      "links": [
        {
          "label": "Code",
          "url": "https://github.com/clhaeun/embodied-repairagent"
        }
      ]
    },
    {
      "id": "gram",
      "shortTitle": "Recursive reasoning / GRAM",
      "title": "Recursive Reasoning Beyond a Single Trajectory",
      "subtitle": "GRAM Reproduction · KAIST MLML · Jun–Aug 2026",
      "image": "assets/gram_stochastic_trajectories.png",
      "imageAlt": "Research diagram contrasting deterministic and stochastic latent reasoning trajectories",
      "paragraphs": [
        "I reproduced GRAM (Generative Recursive reAsoning Models), which aims to deepen reasoning without generating lengthy autoregressive chains of thought. It repeatedly refines latent states through shared Transformer-based modules, while stochastic updates enable the exploration of multiple reasoning paths and possible solutions.",
        "Across N-Queens, Graph Coloring, and Sudoku, I investigated how this stochastic reasoning process behaves. In my reproduction, I found that failures often came from not generating a correct trajectory rather than selecting the wrong candidate. I then studied how latent stochasticity affects reasoning accuracy and solution diversity."
      ],
      "links": [
        {
          "label": "Code",
          "url": "https://github.com/clhaeun/gram-repro"
        }
      ]
    },
    {
      "id": "vla-npu",
      "shortTitle": "VLA inference on NPU",
      "title": "Efficient VLA Inference for Robotic Action Generation",
      "subtitle": "π₀ VLA · BOS NPU · Sep 2026–Present",
      "image": "assets/example.jpg",
      "imageAlt": "Conceptual VLA dataflow from vision-language prefix states to repeated action refinement on an NPU",
      "paragraphs": [
        "I am optimizing π₀/VLA inference on a BOS NPU, with recent model-only latency reaching approximately 0.77 s, compared with roughly 4.6 s in early-stage runs.",
        "I trace the model graph to analyze how intermediate activations and K/V states are produced, stored, moved, and reused. Based on tensor lifetimes, shapes, and reuse patterns, I optimize data placement, compute mapping, and execution structure across the VLM and action expert, including eliminating computations that do not contribute to the final action."
      ],
      "links": [],
      "detailsTitle": "Optimization details",
      "details": [
        {
          "title": "Model-Level Dataflow",
          "paragraphs": [
            "I traced tensor dependencies, memory placement, and reuse patterns across the VLM and action expert to identify costly data movement and unnecessary computation."
          ]
        },
        {
          "title": "Shape-Aware Compute Mapping",
          "paragraphs": [
            "Large VLM projections, frequently repeated Expert layers, and attention operations expose different degrees of parallelism. I adapted sharding, core mapping, and execution granularity to their tensor shapes and execution patterns."
          ]
        },
        {
          "title": "Fusion and State Reuse",
          "paragraphs": [
            "I applied operator fusion and reused intermediate states, including the fixed prefix K/V context across repeated action-refinement steps, to reduce redundant computation and data movement."
          ]
        }
      ]
    }
  ],
  "earlierResearch": [
    {
      "institution": "EmbodiedInsightBenchmark",
      "position": "Collaborative Research Project · CSI-Agent Lab · BEHAVIOR-1K / OmniGibson",
      "advisor": "",
      "paragraphs": [
        "Inspired by Imagining and Building Wise Machines: The Centrality of AI Metacognition (Johnson et al., 2026), I contributed to the design and implementation of simulation-based evaluation tasks for Context Adaptability and Scenario Flexibility.",
        "These tasks probe whether embodied agents can distill reusable insights from experience, flexibly recombine them to solve unfamiliar problems, and recognize new possibilities for using familiar tools. They also examine whether agents can reason about multiple ways their actions might fail, anticipate their consequences, and incorporate these possibilities into planning."
      ],
      "links": [
        {
          "label": "Conceptual Reference",
          "url": "https://arxiv.org/abs/2411.02478"
        }
      ]
    },
    {
      "institution": "System Intelligence Lab, KAIST",
      "position": "Undergraduate Research Intern · Jun–Aug 2025",
      "advisor": "",
      "paragraphs": [
        "Through weekly seminars, I studied deep reinforcement learning, model-based RL, world models, diffusion models, and flow-based generative models.",
        "I also conducted Diffusion Posterior Sampling experiments for denoising and inpainting and presented the results in a lab seminar. This experience introduced me to learned dynamics and generative modeling for prediction and decision making."
      ]
    }
  ],
  "publications": [
    {
      "title": "Efficient Skill Grounding via Code Refactoring with Small Language Models",
      "authors": [
        "Sera Choi",
        "Wonje Choi",
        "Saehun Chun",
        "Daehee Lee",
        "Jooyoung Kim",
        "Chaeun Lee",
        "Honguk Woo"
      ],
      "venue": "International Conference on Machine Learning (ICML), 2026",
      "contribution": "Implemented and evaluated the RepairAgent baseline in embodied environments, focusing on failure detection, recovery from changed environment states, and continuation of partially completed tasks.",
      "links": [
        {
          "label": "Paper / arXiv",
          "url": "https://arxiv.org/abs/2606.07999"
        }
      ]
    }
  ],
  "technicalProjects": [
    {
      "title": "Model Compression for NPU Deployment",
      "meta": "STOB League 2025",
      "description": "Developed a joint bad-pixel detection, correction, and demosaicing model. Applied INT4 quantization and sparsity pruning, achieving 11.43× compression, 87.5% lower memory usage, and 63.6% lower inference latency with approximately 1 dB PSNR degradation."
    },
    {
      "title": "CUDA Kernel Optimization",
      "meta": "Parallel Computer Architecture & Programming",
      "description": "Implemented tiled GEMM with 32×32 shared-memory tiles, achieving up to 1.96× speedup through increased data reuse."
    },
    {
      "title": "AI Accelerator RTL Implementation",
      "meta": "AI System Semiconductor Design",
      "description": "Converted a PyTorch DNN into 16-bit fixed-point SystemVerilog RTL, including memory placement and inter-layer data movement."
    }
  ]
};
