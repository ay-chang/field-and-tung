import Link from "next/link";
import Footer from "@/components/Footer";

const STATS = [
    { num: "50+", label: "Years Combined Experience" },
    { num: "2016", label: "Year Founded" },
    { num: "DMV", label: "Primary Market" },
    { num: "Nationwide", label: "Project Availability" },
];

const SERVICES = [
    {
        title: "Structural Design",
        items: [
            "New Construction",
            "Renovations & Additions",
            "Historic Preservation",
            "Adaptive Reuse",
            "Specialty Structures",
            "Feasibility Studies",
            "Masonry Stabilization",
            "Tenant Improvements",
        ],
    },
    {
        title: "Building Performance",
        items: [
            "Condition Assessments",
            "Investigations",
            "Forensic Engineering",
            "Peer Reviews",
            "Expert Witness Testimony",
            "Litigation Support",
        ],
    },
    {
        title: "Construction Support",
        items: [
            "Light Gauge Metal Stud Framing",
            "Pre-Engineered Systems",
            "Temporary Shoring",
            "Shop Drawing Review",
            "Inspections",
            "Concrete Rehabilitation",
        ],
    },
];

export default function About() {
    return (
        <div className="page page-fade">
            {/* Hero */}
            <div className="about-hero">
                <div className="about-hero-left">
                    <h1 className="about-title">
                        About
                        <br />
                        the <em>Firm</em>
                    </h1>
                    <div>
                        <p className="about-body">
                            Field &amp; Tung was founded in 2016 and is a consulting structural
                            engineering firm specializing in all components of structural
                            building design, assessments, and investigations.
                        </p>
                        <p className="about-body" style={{ marginTop: 18 }}>
                            Our engineers bring over 50 years of combined experience. We are an
                            experienced team equipped to handle any request — recognized
                            leaders in structural design, building diagnostics, and the
                            preservation and rehabilitation of historic structures.
                        </p>
                        <p className="about-body" style={{ marginTop: 18 }}>
                            The DMV region — Washington, DC, Maryland, and Virginia — is our
                            primary market, but we are equipped to take on projects nationwide.
                            Jon has completed work in multiple states, and we welcome projects
                            wherever they take us.
                        </p>
                        <p className="about-body" style={{ marginTop: 18 }}>
                            The majority of our projects are for repeat clients, built on
                            long-term relationships through attention to detail and personal
                            service.
                        </p>
                    </div>
                </div>
                <div className="about-hero-right">
                    <div className="about-stat-grid">
                        {STATS.map((s) => (
                            <div key={s.label}>
                                <div className="about-stat-num">{s.num}</div>
                                <div className="about-stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="about-services">
                <div className="about-services-sidebar">
                    <p className="section-label" style={{ marginBottom: 14 }}>
                        Services
                    </p>
                    <p
                        style={{
                            fontSize: 12,
                            color: "var(--mid)",
                            lineHeight: 1.7,
                            fontWeight: 300,
                            marginTop: 10,
                        }}
                    >
                        A comprehensive range of structural engineering services for all scales
                        and typologies.
                    </p>
                </div>
                <div className="about-services-body">
                    {SERVICES.map((g) => (
                        <div key={g.title}>
                            <div className="service-group-title">{g.title}</div>
                            <ul className="service-list">
                                {g.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* People teaser */}
            <div
                style={{
                    padding: "30px 36px 70px",
                    display: "flex",
                    alignItems: "baseline",
                    gap: 36,
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    borderTop: "1px solid var(--rule)",
                }}
            >
                <p
                    style={{
                        fontStyle: "italic",
                        fontFamily: "var(--serif)",
                        fontSize: 22,
                        color: "var(--ink)",
                        maxWidth: 640,
                        lineHeight: 1.45,
                        fontWeight: 300,
                    }}
                >
                    Meet the engineers behind the work — three decades of experience across new
                    construction, historic preservation, and forensic analysis.
                </p>
                <Link href="/people" className="home-cta">
                    Meet the Team
                </Link>
            </div>

            <Footer />
        </div>
    );
}
