# SmartSpend: ML-Powered Expense Tracker

## 🚀 Project Overview
**SmartSpend** is an intelligent expense tracking system that revolutionizes financial management through **Machine Learning and OCR technology**. Users can simply upload bill/receipt images, and the system automatically extracts all relevant information—including amounts, vendors, dates, and line items—and intelligently categorizes expenses using a trained ML model.

The system provides a **comprehensive dashboard with interactive insights** to help individuals and businesses make data-driven financial decisions.

---

## ✨ Key Features

### 🤖 ML-Powered Bill Extraction
- **Advanced OCR Processing**: Extract text from PNG, JPEG, TIFF, and PDF formats.
- **Smart Data Extraction**: Automatically identify vendors, amounts, dates, and individual items.
- **Intelligent Categorization**: Hybrid ML model (TF-IDF + Numeric) with high accuracy.
- **Robust Preprocessing**: Integrated OpenCV pipeline for image cleaning.

### 📊 Intelligent Analytics
- **Live Dashboard**: Real-time spending visualizations and trends.
- **Predictive Insights**: Spending pattern analysis and budget forecasting.
- **Budget Tracking**: Smart alerts and category-wise breakdown.
- **Exportable Reports**: Generate detailed summaries in CSV/PDF formats.

---

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern UI with hooks and state management.
- **Vite**: Ultra-fast build tool and development server.
- **Tailwind CSS**: Responsive, utility-first styling.
- **Framer Motion**: Smooth micro-animations and transitions.
- **Lucide React**: Clean, consistent iconography.

### Backend & ML
- **Flask**: Lightweight Python API framework with CORS.
- **Tesseract OCR**: Industrial-grade text extraction engine.
- **OpenCV**: Advanced image preprocessing (OTSU, Gaussian Blur).
- **scikit-learn**: Logistic Regression pipeline for classification.
- **Pandas/NumPy**: Efficient data manipulation and processing.

---

## 📁 Project Structure
```yaml
SmartSpend/
├── frontend/               # React + Vite application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── utils/         # Helper functions
│   │   └── App.jsx        # Root component
│   └── tailwind.config.js
│
├── backend/                # Flask API server
│   ├── app.py             # Main API & Extraction logic
│   ├── models.py          # ML Model definitions
│   └── requirements.txt   # Python dependencies
│
├── Expense_model/         # ML Training environment
│   ├── models/            # Saved .pkl model files
│   ├── training.ipynb     # Model development notebook
│   └── data/              # Training datasets
│
├── setup.bat              # Windows automation script
└── README.md              # Project documentation
```

---

## ⚙️ Quick Setup

### Automated Setup (Windows)
```bash
# Run the integrated setup script
setup.bat
```

### Manual Installation

#### 1. Install Tesseract OCR
- **Windows**: Download installer from [UB-Mannheim](https://github.com/UB-Mannheim/tesseract/wiki)
- **macOS**: `brew install tesseract`
- **Linux**: `sudo apt-get install tesseract-ocr`

#### 2. Backend Setup
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate | Unix: source venv/bin/activate
pip install -r requirements.txt
python app.py
```

#### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 💡 How It Works

1.  **Image Input**: User uploads a receipt (Image/PDF).
2.  **Preprocessing**: Image is converted to grayscale, blurred, and thresholded via OpenCV.
3.  **OCR Execution**: Tesseract extracts raw text using multiple Page Segmentation Modes (PSM).
4.  **Information Extraction**: Regex-based parsers extract dates, vendors, and amounts.
5.  **ML Categorization**: The extracted description is vectorized and passed through a Logistic Regression model to assign a category (e.g., *Groceries*, *Electronics*).
6.  **Human-in-the-loop**: Users can review and correct any extracted data before saving.

---

## 🔍 Troubleshooting

- **Low OCR Accuracy**: Ensure the receipt is well-lit and flat. Avoid blurry images.
- **Tesseract Not Found**: Ensure Tesseract is installed and the path is correctly set in `backend/app.py`.
- **Model Version Warning**: If you see scikit-learn warnings, consider retraining the model using the provided Jupyter notebook in `Expense_model/`.

---

## 👥 Contributors
- **Thulasiram K** – Frontend & UI Architecture (Team Lead)
- **Ravindran S** – ML Engineering & Backend Development

---

## 📄 License
This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
