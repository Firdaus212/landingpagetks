export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white text-gray-700 text-sm px-6 pt-16 pb-10 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-semibold text-[#FA541C] text-lg mb-3">Services</h4>
          <ul className="space-y-1 text-gray-600">
            <li>E-Learning</li>
            <li>Scholarship</li>
            <li>Mentoring</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#FA541C] text-lg mb-3">Information</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Sign Up</li>
            <li>Result Info</li>
            <li>Help Center</li>
            <li>About Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#FA541C] text-lg mb-3">Platform</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Partnership</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#FA541C] text-lg mb-3">Get In Touch</h4>
          <p className="mb-3 text-gray-600">Stay connected with us on social media:</p>
          <div className="flex space-x-3 text-xl">
            <a href="#" className="hover:text-[#FA541C] transition">📘</a>
            <a href="#" className="hover:text-[#FA541C] transition">📷</a>
            <a href="#" className="hover:text-[#FA541C] transition">🐦</a>
            <a href="#" className="hover:text-[#FA541C] transition">📺</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-500">
        © TKS 2025 All rights reserved.
      </div>
    </footer>
  );
}
