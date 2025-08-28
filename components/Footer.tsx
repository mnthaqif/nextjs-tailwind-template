export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="font-bold text-lg gradient-text">BrandName</span>
            <p className="text-xs text-slate-500 mt-2">
              © {new Date().getFullYear()} BrandName Inc. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}