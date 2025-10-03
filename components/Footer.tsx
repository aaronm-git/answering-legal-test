import Divider from "./ui/Divider";

export default function Footer() {
  return (
    <footer className='bg-navy-blue flex flex-col gap-8 text-white lg:gap-[45px]'>
      {/* Header Section with Contact Info */}
      <div className='bg-midnight-blue'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='h3 mx-auto mb-[13px] max-w-[456px]'>
            Have questions? Our team is here to help. Call{" "}
            <a href='tel:631-400-8888' className=''>
              631-400-8888
            </a>
          </h2>
          <p className='text-teal caption'>
            Monday to Friday from 9 AM to 7 PM EST
          </p>
        </div>
      </div>

      <div className='container mx-auto px-4'>
        <Divider className='bg-white/10' />
      </div>

      {/* Main Footer Content */}
      <div className='text-white max-lg:text-center'>
        <div className='container mx-auto px-4'>
          {/* Mobile Layout - Simple Grid with Section Links */}
          <div className='grid grid-cols-2 gap-6 md:hidden'>
            <a href='#' className='h3'>
              Our Service
            </a>
            <a href='#' className='h3'>
              Company
            </a>
            <a href='#' className='h3'>
              Partnerships
            </a>
            <a href='#' className='h3'>
              Resources
            </a>
            <a href='#' className='h3'>
              Support
            </a>
            <a href='#' className='h3'>
              Follow Us
            </a>
          </div>

          {/* Desktop Layout - Full Navigation */}
          <div className='hidden gap-8 md:grid md:grid-cols-3 lg:grid-cols-6'>
            {/* Our Service */}
            <div>
              <h3 className='subtitle1 mb-6'>Our Service</h3>
              <ul className='space-y-3'>
                <li>
                  <a href='#' className=''>
                    Why We Serve
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    What Is An Answering Service?
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    What Is A Legal Intake Receptionist?
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    What Is A Virtual Receptionist?
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className='subtitle1 mb-6'>Company</h3>
              <ul className='space-y-3'>
                <li>
                  <a href='#' className=''>
                    Meet The Team
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Our Authors
                  </a>
                </li>
              </ul>
            </div>

            {/* Partnerships */}
            <div>
              <h3 className='subtitle1 mb-6'>Partnerships</h3>
              <ul className='space-y-3'>
                <li>
                  <a href='#' className=''>
                    Integrations
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Law Firm Marketing
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className='subtitle1 mb-6'>Resources</h3>
              <ul className='space-y-3'>
                <li>
                  <a href='#' className=''>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Podcast
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Videos
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Let's Talk Legal Marketing
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    The Answering Legal Book Club
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Top Legal Softwares
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className='subtitle1 mb-6'>Support</h3>
              <ul className='space-y-3'>
                <li>
                  <a href='#' className=''>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Submit A Ticket
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Employment Opportunities
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className='subtitle1 mb-6'>Follow Us</h3>
              <ul className='space-y-3'>
                <li>
                  <a href='#' className=''>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4'>
        <Divider className='bg-white/10' />
      </div>
      {/* Bottom Copyright Section */}
      <div className='py-6'>
        <div className='container mx-auto px-4 text-center'>
          <p className='caption text-white'>
            © 2024 ANSWERING LEGAL • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
