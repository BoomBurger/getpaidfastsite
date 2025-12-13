export default function Footer() {
  return (
    <footer className="border-t border-text/10 bg-black py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center text-xs text-text-muted">
        <p>
          Powered by getpaid<span className="text-primary/70">fast</span>.ai • <a href="https://dashboard.getpaidfast.ai/register" className="text-secondary hover:text-white transition-colors">Create your own agent</a>
        </p>
      </div>
    </footer>
  );
}
