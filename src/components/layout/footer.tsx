export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-6 px-4 md:px-6 text-center text-foreground/60">
        <p>&copy; {currentYear} Lavoe Kwaku Jeremiah. All rights reserved.</p>
        <p className="text-sm mt-1">Designed & Built by Lavoe Kwaku Jeremiah.</p>
      </div>
    </footer>
  );
}
