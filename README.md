# 🦙 Luxe Llama Co. - Universal Linking Test Site

A parody luxury alpaca wool e-commerce website designed for testing mobile app universal linking functionality.

## 🎯 Purpose

This static HTML website serves as a testing platform for:
- Mobile app universal linking (iOS & Android)
- AASA (Apple App Site Association) file validation
- Android App Links functionality
- SDK integration testing
- Web development demonstrations

## 🏗️ Project Structure

```
public/
├── .well-known/
│   ├── apple-app-site-association    # iOS universal linking config
│   └── assetlinks.json              # Android app links config
├── _headers                         # Netlify headers configuration
├── index.html                       # Home page
├── about/
│   └── index.html                   # About page
├── products/
│   ├── index.html                   # Products listing
│   ├── himalayan-scarf.html         # Product detail page
│   ├── executive-throws.html        # Product detail page
│   └── artisan-gloves.html          # Product detail page
└── disclaimer.html                  # Parody disclaimer
```

## 🚀 Deployment

### Netlify (Recommended)
1. Connect this repository to Netlify
2. Set build directory to `public/`
3. Deploy automatically on commits to `main`

The `_headers` file ensures proper Content-Type headers for AASA and app links files.

### Local Development
```bash
# Serve files locally (any HTTP server)
python -m http.server 8000 -d public
# or
npx serve public
```

## 📱 Universal Linking Configuration

### iOS (AASA)
- **File**: `/.well-known/apple-app-site-association`
- **Paths**: `/`, `/products`, `/products/*`
- **Apps**: iOS SDK test applications

### Android (App Links)
- **File**: `/.well-known/assetlinks.json`
- **Apps**: Android SDK test applications

## 🦙 About Luxe Llama Co.

**This is a parody website created for testing purposes only.**

Luxe Llama Co. is a fictional luxury alpaca wool company featuring:
- Premium alpaca accessories and home goods
- Sustainable luxury branding
- Professional e-commerce design
- Humorous product descriptions

## ⚠️ Disclaimer

This website:
- Is **not a real business**
- Does not sell actual products
- Is created for technical testing only
- Contains fictional content and pricing
- Should not be used for commercial purposes

## 🛠️ Technical Details

- **Framework**: Static HTML/CSS
- **Styling**: Inline CSS with professional design
- **Responsive**: Mobile-friendly design
- **Testing**: Universal linking validation
- **Headers**: Netlify `_headers` configuration

## 📄 License

This project is for testing and educational purposes only. All Luxe Llama Co. content is fictional.