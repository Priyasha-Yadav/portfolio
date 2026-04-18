import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const certificates = [
    {
        title: "Coding for Data",
        organization: "Sololearn",
        date: "March 2025",
        category: "Data Science",
        image: "https://api2.sololearn.com/v2/certificates/CC-IPYFAP0I/image/jpg?t=638787887526806060",
        link: "https://www.sololearn.com/certificates/CC-IPYFAP0I",
    },
    {
        title: "Generative AI",
        organization: "SheKunj",
        date: "March 2025",
        category: "Technology",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1743193966/Screenshot_2025-03-29_at_2.01.32_AM_iogfis.png",
        link: "https://www.shekunj.com/certificate-detail/14352",
    },
    {
        title: "AWS APAC Solutions Architecture",
        organization: "Forage",
        date: "June 2025",
        category: "Cloud",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1768925710/Screenshot_2026-01-20_at_9.44.48_PM_dt35xp.png",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_sCbgcpTY2ZHS6Qurb_1750028004372_completion_certificate.pdf",

    },
    {
        title: "Cybersecurity Analyst Job Simulation",
        organization: "Forage",
        date: "June 2025",
        category: "Technology",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1768925765/Screenshot_2026-01-20_at_9.45.55_PM_t9bphr.png",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_sCbgcpTY2ZHS6Qurb_1750797249275_completion_certificate.pdf",

    },
    {
        title: "Github Copilot Fundamentals",
        organization: "Simplilearn",
        date: "May 2025",
        category: "Technology",
        image: "https://certificates.simplicdn.net/share/8356658_87089041747516430791.png",
        link: "https://simpli-web.app.link/e/2iUjh2mktUb",
    },
    {
        title: "Introduction to basics of Azure Services",
        organization: "Simplilearn",
        date: "June 2025",
        category: "Cloud",
        image: "https://certificates.simplicdn.net/share/8530376_87089041751020573231.png",
        link: "https://simpli-web.app.link/e/wx0dgG5sxUb",
    },
    {
        title: "Google Ads App",
        organization: "SheKunj",
        date: "March 2025",
        category: "Technology",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1743193967/Screenshot_2025-03-29_at_2.01.50_AM_gbemki.png",
        link: "https://www.shekunj.com/certificate-detail/14378",
    },
    {
        title: "C++ Intermediate",
        organization: "Sololearn",
        date: "March 2025",
        category: "Programming",
        image: "https://api2.sololearn.com/v2/certificates/CC-HTMIXKTY/image/png?t=638767937300349920",
        link: "https://www.sololearn.com/certificates/CC-HTMIXKTY",
    },
    {
        title: "SQL Intermediate",
        organization: "Sololearn",
        date: "February 2025",
        category: "Database",
        image: "https://api2.sololearn.com/v2/certificates/CC-Q4ZHP1PI/image/png?t=638755872614346040",
        link: "https://www.sololearn.com/certificates/CC-Q4ZHP1PI",
    },
    // {
    //   title: "Python Intermediate",
    //   organization: "Sololearn",
    //   date: "February 2025",
    //   category: "Programming",
    //   image: "https://api2.sololearn.com/v2/certificates/CC-701NQAQ2/image/png?t=638753146342863320",
    //   link: "https://www.sololearn.com/certificates/CC-701NQAQ2",
    // },
    {
        title: "Tech for Everyone",
        organization: "Sololearn",
        date: "January 2025",
        category: "Technology",
        image: "https://api2.sololearn.com/v2/certificates/CC-X2IMUN2O/image/png?t=638739370423358900",
        link: "https://www.sololearn.com/certificates/CC-X2IMUN2O",
    },
    {
        title: "Programming In Java",
        organization: "NPTEL",
        date: "October 2025",
        category: "Programming",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1767675826/Screenshot_2026-01-06_at_10.33.31_AM_wwwd9z.png",
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs110/Course/NPTEL25CS110S45630032210988963.pdf",
    },
    {
        title: "Coding Foundations",
        organization: "Sololearn",
        date: "January 2025",
        category: "Programming",
        image: "https://api2.sololearn.com/v2/certificates/CC-XWLDCGVW/image/jpg?t=638738513375866280",
        link: "https://www.sololearn.com/certificates/CC-XWLDCGVW",
    },
    {
        title: "Introduction to C++",
        organization: "Sololearn",
        date: "December 2024",
        category: "Programming",
        image: "https://api2.sololearn.com/v2/certificates/CC-7BGJSIBU/image/png?t=638726507033878350",
        link: "https://www.sololearn.com/certificates/CC-7BGJSIBU",
    },
    {
        title: "Introduction to Java",
        organization: "Sololearn",
        date: "December 2024",
        category: "Programming",
        image: "https://api2.sololearn.com/v2/certificates/CC-BM8X6NZI/image/png?t=638725252007505580",
        link: "https://www.sololearn.com/certificates/CC-BM8X6NZI",
    },
    {
        title: "JavaScript Intermediate",
        organization: "Sololearn",
        date: "December 2024",
        category: "Web Development",
        image: "https://api2.sololearn.com/v2/certificates/CC-MZA4LT9Y/image/png?t=638724558711724680",
        link: "https://www.sololearn.com/certificates/CC-MZA4LT9Y",
    },
    // {
    //   title: "Python Developer",
    //   organization: "Sololearn",
    //   date: "December 2024",
    //   category: "Programming",
    //   image: "https://api2.sololearn.com/v2/certificates/CC-PULWLYCU/image/png?t=638718778158268370",
    //   link: "https://www.sololearn.com/certificates/CC-PULWLYCU",
    // },

    // {
    //   title: "Introduction to Python",
    //   organization: "Sololearn",
    //   date: "December 2024",
    //   category: "Programming",
    //   image: "https://api2.sololearn.com/v2/certificates/CC-NEZBGXJJ/image/png?t=638717458600839120",
    //   link: "https://www.sololearn.com/certificates/CC-NEZBGXJJ",
    // },
    {
        title: "Introduction to SQL",
        organization: "Sololearn",
        date: "December 2024",
        category: "Database",
        image: "https://api2.sololearn.com/v2/certificates/CC-G5ZCWBF1/image/png?t=638595931432498120",
        link: "https://www.sololearn.com/certificates/CC-G5ZCWBF1",
    },
    {
        title: "ReactJS",
        organization: "Infosys Springboard",
        date: "July 2025",
        category: "Web Development",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1768926087/Screenshot_2026-01-20_at_9.51.07_PM_uavi1t.png",
        link: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1768926087/Screenshot_2026-01-20_at_9.51.07_PM_uavi1t.png",

    },
    {
        title: "HTML5",
        organization: "Infosys Springboard",
        date: "July 2025",
        category: "Web Development",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1768925957/Screenshot_2026-01-20_at_9.48.11_PM_zja2kn.png",
        link: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1768925957/Screenshot_2026-01-20_at_9.48.11_PM_zja2kn.png",

    },
    {
        title: "Web Development",
        organization: "Sololearn",
        date: "December 2024",
        category: "Web Development",
        image: "https://api2.sololearn.com/v2/certificates/CC-P6H0LEIA/image/png?t=638705317285883560",
        link: "https://www.sololearn.com/certificates/CC-P6H0LEIA",
    },
    {
        title: "Introduction to JavaScript",
        organization: "Sololearn",
        date: "December 2024",
        category: "Web Development",
        image: "https://api2.sololearn.com/v2/certificates/CC-U4WVGRPQ/image/png?t=638597480140183890",
        link: "https://www.sololearn.com/certificates/CC-U4WVGRPQ",
    },
    {
        title: "Introduction to CSS",
        organization: "Sololearn",
        date: "December 2024",
        category: "Web Development",
        image: "https://api2.sololearn.com/v2/certificates/CC-T4FW0T6L/image/png?t=638678515211608360",
        link: "https://www.sololearn.com/certificates/CC-U4WVGRPQ",
    },
    {
        title: "Introduction to HTML",
        organization: "Sololearn",
        date: "December 2024",
        category: "Web Development",
        image: "https://api2.sololearn.com/v2/certificates/CC-M0AEWCSO/image/png?t=638604643713739320",
        link: "https://www.sololearn.com/certificates/CC-M0AEWCSO",
    },
    {
        title: "Introduction to C",
        organization: "Sololearn",
        date: "December 2024",
        category: "Programming",
        image: "https://api2.sololearn.com/v2/certificates/CC-FYR8YLCR/image/png?t=638625746253262490",
        link: "https://www.sololearn.com/certificates/CC-FYR8YLCR",
    },
    {
        title: "Gateway Load Balancer",
        organization: "Simplilearn",
        date: "June 2025",
        category: "Cloud",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1768927915/Screenshot_2026-01-20_at_10.21.45_PM_dw8lmj.png",
        link: "https://certificates.simplicdn.net/share/8548827_89137501751372445491.pdf",
    },
    {
        title: "Azure Fundamentals",
        organization: "Rai University X Microsoft",
        date: "April 2025",
        category: "Cloud",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1751382209/Screenshot_2025-07-01_at_8.30.27_PM_ooileu.png",
        link: "https://www.linkedin.com/posts/priyasha-yadav_certification-activity-7332734239534190592-djJV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFU3zCgBdLbqECY2ju_KmXuidCnV7dtvFc4",
    },
    {
        title: "Power BI Fundamentals",
        organization: "Rai University X Microsoft",
        date: "April 2025",
        category: "Data Science",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1751382210/Screenshot_2025-07-01_at_8.30.35_PM_zqtzib.png",
        link: "https://www.linkedin.com/posts/priyasha-yadav_certification-activity-7332734239534190592-djJV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFU3zCgBdLbqECY2ju_KmXuidCnV7dtvFc4",
    },
    {
        title: "Getting Started - Amazon DocumentDB",
        organization: "Simplilearn",
        date: "July 2025",
        category: "Cloud",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1768927783/Screenshot_2026-01-20_at_10.19.34_PM_xvrqay.png",
        link: "https://simpli-web.app.link/e/iyPB0jmrEUb",
    },
    {
        title: "Deep Dive on Container Security",
        organization: "Simplilearn",
        date: "July 2025",
        category: "Cloud",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1768927990/Screenshot_2026-01-20_at_10.23.03_PM_nvvve3.png",
        link: "https://certificates.simplicdn.net/share/8554188_89137501751385500266.pdf",
    },
    {
        title: "Azure Fundamentals",
        organization: "Simplilearn",
        date: "July 2025",
        category: "Cloud",
        image: "https://res.cloudinary.com/dd5zrwqzj/image/upload/v1768927822/Screenshot_2026-01-20_at_10.20.11_PM_yaslxf.png",
        link: "https://simpli-web.app.link/e/oOaorSoTEUb",
    }
];

// Create categories for filtering
const allCategories = ['All', ...new Set(certificates.map(cert => cert.category))];

const CertificatesSection = () => {
    const ITEMS_PER_PAGE = 6; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState('All');

    /* ---------- FILTER (memoized ONCE) ---------- */
    const filteredCertificates = useMemo(() => {
        return activeCategory === 'All'
            ? certificates
            : certificates.filter(c => c.category === activeCategory);
    }, [activeCategory]);

    /* ---------- PAGINATION ---------- */
    const totalPages = Math.ceil(filteredCertificates.length / ITEMS_PER_PAGE);

    const currentCertificates = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredCertificates.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredCertificates, currentPage]);

    /* ---------- HANDLERS ---------- */
    const changeCategory = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    /* ================= RENDER ================= */

    return (
        <section
            className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black"
        >
            {/* ---------- TITLE ---------- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <h4 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    Certifications
                </h4>
                <p className="max-w-2xl mx-auto text-gray-300">
                    A collection of professional certificates showcasing my technical expertise.
                </p>
            </motion.div>

            {/* ---------- FILTER ---------- */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {allCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => changeCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${activeCategory === category
                            ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {/* ---------- GRID ---------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCertificates.map(cert => (
                    <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 overflow-hidden"
                    >
                        <div className="p-6">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />

                            <span className="inline-block mb-2 px-3 py-1 text-xs bg-red-500/20 text-red-400 rounded-full">
                                {cert.category}
                            </span>

                            <h4 className="text-xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                                {cert.title}
                            </h4>

                            <div className="flex justify-between text-sm text-gray-400 mt-2">
                                <span>{cert.organization}</span>
                                <span>{cert.date}</span>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-5 text-center px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 text-white hover:shadow-lg transition"
                            >
                                View Certificate
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* ---------- PAGINATION ---------- */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-12">

                    {/* Prev */}
                    <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition
        ${currentPage === 1
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                : 'bg-gray-800 text-white hover:bg-red-500'
                            }`}
                        aria-label="Previous page"
                    >
                        ←
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 rounded-full text-sm transition
          ${page === currentPage
                                    ? 'bg-purple-700 text-white font-bold'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            aria-label={`Go to page ${page}`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* Next */}
                    <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition
        ${currentPage === totalPages
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                : 'bg-gray-800 text-white hover:bg-red-500'
                            }`}
                        aria-label="Next page"
                    >
                        →
                    </button>

                </div>
            )}

        </section>
    );
};

export default CertificatesSection;