import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";


export const HERO_CONTENT = `Experienced Generative AI, Python & SQL Developer with 3.1+ years of hands-on expertise in building scalable backend systems, advanced SQL pipelines, and intelligent GenAI applications. Proficient in developing RAG architectures, semantic and hybrid search, and multimodal AI solutions using LLMs, FastAPI, and vector databases like Qdrant and FAISS. Strong foundation in Python-based data engineering, with extensive experience in designing ETL workflows, optimizing SQL batch processing, and integrating large-scale datasets into GenAI systems. Skilled in deploying vision-language models for intelligent PDF parsing, building robust RESTful APIs, and developing high-performance services for document intelligence and data retrieval. Led multiple end-to-end initiatives spanning prompt engineering, LLM-powered ranking systems, and real-time backend optimization (achieving 80% Azure VM runtime reduction). Actively seeking impactful roles in AI-backed product development and data-driven backend systems, combining deep Python-SQL knowledge with production-grade GenAI experience.`;

export const ABOUT_TEXT = `Innovative Software Engineer with 3.1+ years of experience in Python backend development using FastAPI, SQL, and Generative AI. Skilled in building scalable, high-performance systems and deploying multimodal RAG solutions integrating vision and language models. Proven success in optimizing runtimes by 80%, designing intelligent retrieval pipelines with LLMs, and leading cross-functional teams to deliver production-ready AI systems. Experienced with both open-source and enterprise AI stacks, delivering advanced document intelligence through robust FastAPI architectures. Currently focused on developing GenAI applications that combine NLP and computer vision for real-world automation and analytics.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Generative AI & Backend Developer",
    company: "Infosys",
    description: `•	Architected end-to-end Generative AI applications using FastAPI, integrating multimodal pipelines that span data preprocessing to response generation with Large Language Models (LLMs). These systems powered dynamic, context-rich interfaces for enterprise-level workflows.
•	Designed and implemented multimodal Retrieval-Augmented Generation (RAG) frameworks that integrate vision-language models (e.g., BLIP, CLIP) for extracting image-text pairs from PDFs, enabling document-level reasoning and response generation.
•	Developed semantic embedding pipelines using transformer models, with vector storage in FAISS, Qdrant etc.., optimized through indexing strategies (HNSW, IVF, Flat) chosen based on retrieval goals and domain constraints.
•	 Integrated reranking modules powered by cross-encoders and hybrid search, boosting system precision. Evaluated performance with metrics including precision@k, recall@k, answer relevance, and faithfulness to ensure reliability and to validate model performance.
•	Delivered enterprise-grade applications, including semantic search engines and image similarity platforms, resulting in 85% reduction in manual data extraction time. Mentored teams and led prompt engineering sessions to scale knowledge across multimodal GenAI practices.
`,
    technologies: ["Gen AI","RAG", "Database", "Langchain","Python","FastAPI"],
  },
  {
    year: "2022 - 2024",
    role: "Backend & Database Developer",
    company: "Infosys",
    description: `•	Architected scalable backend systems using Python and FastAPI for corrosion prediction and storage tracking applications, implementing high-performance RESTful APIs with advanced Databases for real-time data pre-processing capabilities. 
•	Built reliable infrastructure for inventory management, implementing user role tracking, multi-scenario exception handling, and scalable data storage mechanisms to support operational continuity.
•	Engineered robust ETL pipelines for structured data extraction, transformation, and batch SQL loading from raw industrial datasets, implementing automated daily data synchronization processes.
•	Built modular Python components for mechanisms, evaluation, and deployment using industry best practices, integrated with Azure Blob Storage for large-scale data handling and model output tracking. 
•	Optimized cloud-based architectures, achieving up to 80% reduction in Azure VM runtime via targeted code refinement and resource management—boosting system performance and cost-efficiency.
`,
    technologies: ["Python", "SQL", "FastAPI", "Azure VM's", "Azure storages"],
  },
];

export const PROJECTS = [
    {
    title: "Real-Time Aviation Knowledge Chatbot with Retrieval-Augmented Generation",
    image: project6,
    description:
      "A real-time, domain-specific question-answering system built for aviation knowledge bases using a Retrieval-Augmented Generation (RAG) pipeline. It integrates Large Language Models (LLMs) with vector search and chat memory to deliver context-aware, grounded responses. The system also incorporates RAGAS for evaluating response reliability and retrieval precision.",
    technologies: ["RAG", "Langchain", "FAISS/Qdrant", "OpenAI", "RAGAS", "Python", "FastAPI", "Pandas"],
  },
   {
    title: "Multimodal RAG-Based PDF Intelligence Platform",
    image: project3,
    description:
      "An AI-powered backend system designed to process large volumes of PDFs by combining hybrid search techniques with multimodal retrieval-augmented generation (RAG). It integrates LLMs and vision-language models (VLMs) to extract both textual and visual content, enabling document-level question answering with grounded, context-rich responses.",
    technologies: ["LLM", "Python", "FastAPI", "Databases", "OpenAI/Cohere/Huggingface", "Langchain"],
  },
  {
    title: "Prompt-Driven PDF Data Extraction System",
    image: project4,
    description:
      "FastAPI-based backend system that allows users to upload PDF documents and define custom extraction intents referred to as “schemes.” The application leverages LLM-powered prompting to extract structured, context-aware data tailored to user-defined workflows.",
    technologies: ["Prompt Engineering", "Python","FastAPI", "PyMuPDF", "Pandas", "Cohere", ],
  },
  {
    title: "Smart Nomenclature Retrieval System",
    image: project5,
    description:
      "Python-based intelligent retrieval framework designed to extract and validate user-provided nomenclatures from SQL databases. It leverages n-gram–driven matching and integrates Large Language Models (LLMs) to deliver context-aware, semantically accurate responses.",
    technologies: [ "OpenAI", "Prompt Engineering", "Langchain","Python", "FastAPI", "MySQL"],
  },
  {
    title: "Corrosion Risk Analysis",
    image: project1,
    description:
      "Corrosion-Level Detection for Pipeline Lifespan Forecasting Designed and implemented a corrosion analysis system tailored for oil and gas infrastructure, utilizing real-time sensor data such as dissolved oxygen, pH, pressure, and temperature. Developed rule-based detection mechanisms to assess material degradation and dynamically estimate pipeline lifespan under varying environmental and chemical conditions. Integrated the solution with scalable Python-based backend workflows, connecting outputs to Azure Blob Storage for enterprise-grade data tracking, auditability, and deployment. This system empowers predictive maintenance strategies, reduces inspection overhead, and enhances operational safety.",
    technologies: ["Python", "Pandas", "NumPy", "Azure", "FastAPI", "SQL"],
  },
  {
    title: "Warehouse Inventory Tracking",
    image: project2,
    description:
      "Designed a tool that connects to an SQL database, fetches real-time data, and performs data analysis using Python libraries like Pandas. You can implement various analytical functions and output the results to the CSV file.",
    technologies: ["Python", "FastAPI", "SQL"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9381107689",
  email: "jaswanthvarma06641@gmail.com",
};
