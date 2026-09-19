---
layout: default
title: Projects
---

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .project-card {
    position: relative;
    padding: 1.5rem;
    border: 1px solid #2d2d34;
    border-radius: 8px;
    background-color: transparent; /* Adjust for your theme */
    cursor: pointer;
    transition: transform 0.2s, background 0.2s;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  .project-card:hover {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.05);
    z-index: 100;  /* hover card on top */
  }

  .project-card h3 { margin: 0 0 0.5rem 0; font-size: 1.1rem; }
  .skills { font-size: 0.85rem; color: #888; margin-bottom: 1rem; }
  .repo-link { margin-top: auto; font-weight: bold; text-decoration: none; }

  /* Hover Description Tooltip */
  .desc-tooltip {
    display: none;
    position: absolute;
    top: -10px;
    width: 500px;
    background: #292b31; /* Adjust to match your theme */
    border: 1px solid #2d2d34;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    z-index: 10;
  }

  /* Left column cards show tooltip on the right */
  .project-card:nth-child(odd) .desc-tooltip { left: 105%; }
  
  /* Right column cards show tooltip on the left */
  .project-card:nth-child(even) .desc-tooltip { right: 105%; }

  .project-card:hover .desc-tooltip { display: block; }
  .desc-tooltip ul { margin: 0; padding-left: 1.2rem; font-size: 0.9rem; }
</style>

<nav style="margin-bottom: 2rem; border-bottom: 1px solid #2d2d34; padding-bottom: 1rem;">
  <a href="/" style="margin-right: 1.5rem; font-weight: bold;">Home</a>
  <a href="/projects" style="margin-right: 1.5rem; font-weight: bold;">Projects</a>
  <a href="/blog" style="margin-right: 1.5rem; font-weight: bold;">Blog</a>
  <a href="/contact" style="font-weight: bold;">Contact</a>
</nav>

# 🛠️ Projects and Publications

<div class="projects-grid">
  
  <!-- Card 1 -->
  <div class="project-card">
    <h3>📁 Text2Table: Natural Language to SQL conversion and data retrieval</h3>
    <div class="skills">LLM, RAG, NLP, SQL</div>
    <a href="https://github.com/AnustupBhaumik/Natural_Language_to_SQL" class="repo-link" target="_blank">View Repository →</a>
    <div class="desc-tooltip">
      <ul>
        <li>Built a full-stack natural language-to-SQL system using local Llama models via Ollama.</li>
        <li>Implemented semantic retrieval (sentence-transformer embeddings) for schema understanding, business-context injection, and few-shot query history matching.</li>
        <li>Added self-correcting SQL generation with automated error-retry logic, safety validation, and a minimal web interface for real-time database querying.</li>
      </ul>
    </div>
  </div>

  <!-- Card 1 -->
  <div class="project-card">
    <h3>📁 DocTraverse: Graph-traversed RAG for for technical documentation.</h3>
    <div class="skills">GraphRAG, NER-RE, Document Ingestion & Parsing</div>
    <span class="status-badge">In Progress</span>
    <div class="desc-tooltip">
      <ul>
        <li>Extracting unstructured text and multimodal diagrams from documents locally and splitting them into structured segments using OCR and VLMs.</li>
        <li>Identifying key entities and their semantic relationships and constructing a directed knowledge graph using NetworkX.</li>
        <li>Querying the graph by extracting relevant $k$-hop subgraphs to provide structured, multi-hop context to a local language model for grounded reasoning.</li>
      </ul>
    </div>
  </div>
  

  <!-- Card 2 -->
  <div class="project-card">
    <h3>📁 Deep Learning Network Intrusion</h3>
    <div class="skills">Deep Learning, PyTorch, CyberSecurity</div>
    <a href="https://github.com/AnustupBhaumik/network-intrusion-detection-system-dl-project" class="repo-link" target="_blank">View Repository →</a>
    <div class="desc-tooltip">
      <ul>
        <li>Built hybrid CNN-LSTM architechture for detecting anomalies.</li>
        <li>Trained and Evaluated the Model using comprehensive CIC-IDS-2017 dataset.</li>
        <li>Optimized feature extraction and sequential pattern recognition, achieving high accuracy in multi-class threat detection.</li>
      </ul>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="project-card">
    <h3>📁 Autonomous Drone Delivery System</h3>
    <div class="skills">Q-Learning, Reinforcement Learning, Python</div>
    <a href="https://github.com/AnustupBhaumik/Autonomous-Drone-delivery--system-using-Approx-Q-Learning" class="repo-link" target="_blank">View Repository →</a>
    <div class="desc-tooltip">
      <ul>
        <li>Implemented an Approximate Q-Learning reinforcement learning agent to navigate continuous state spaces for autonomous drone flight.</li>
        <li>Designed custom reward functions and feature extractors to optimize efficient delivery routes while handling dynamic obstacle avoidance.</li>
        <li>Simulated the delivery environment to train and evaluate the agent's policy convergence and decision-making efficiency.</li>
      </ul>
    </div>
  </div>

  <!-- Card 4 -->
  <div class="project-card">
    <h3>📁 Autism Prediction using Machine Learning</h3>
    <div class="skills">Classification, Exploratory Data Analysis, Hyperparameter Tuning</div>
    <a href="https://github.com/AnustupBhaumik/Autism-Prediction-using-ML" class="repo-link" target="_blank">View Repository →</a>
    <div class="desc-tooltip">
      <ul>
        <li>Engineered and preprocessed features from behavioral and demographic medical datasets to prepare for predictive modeling.</li>
        <li>Trained and evaluated multiple machine learning classifiers (e.g., SVM, Random Forest, Logistic Regression) to detect autism traits.</li>
        <li>Compared model performances using standard evaluation metrics to identify the most accurate and reliable classification approach.</li>
      </ul>
    </div>
  </div>

  <!-- Card 5 -->
  <div class="project-card">
    <h3>📁 Mining Data Stream using DGIM Algorithm</h3>
    <div class="skills">Skills: Data Mining, Python</div>
    <a href="https://github.com/AnustupBhaumik/mining-of-massive-datasets/tree/main/dgim" class="repo-link" target="_blank">View Repository →</a>
    <div class="desc-tooltip">
     <ul>
     <li> Implemented DGIM Algorithm on a binary data stream of size 10 million.</li>
     <li> Tuned the number of allowed buckets of same size and optimized the relative error.</li>
     </ul>
    </div>
  </div>



</div>