import Link from "next/link";
import Footer from "@/components/Footer";

const JON = {
    name: "Jon Tung, PE",
    role: "Founding Principal",
    photo: "/tung-profile.jpg" as string | null,
    bio: [
        "Mr. Tung is a founding member of Field & Tung Structural Engineers with thirty years of professional engineering experience in the Washington, DC and Baltimore, MD metropolitan areas.",
        "His expertise encompasses a wide variety of new and existing building structures, including historic renovations and modernizations, adaptive reuse projects, investigations, emergency stabilization, and building repairs, in addition to new building design.",
        "Throughout his career, he has become an expert in both modern and historic structural building systems and materials. At Field & Tung, Mr. Tung remains directly involved with the management of projects as well as project design and analysis.",
    ],
    stats: [
        { num: "30", label: "Years of Experience" },
        { num: "Multiple", label: "States Licensed" },
    ],
    expertise: [
        "Historic Renovations & Modernizations",
        "Adaptive Reuse",
        "Investigations & Forensics",
        "Emergency Stabilization",
        "Building Repairs",
        "New Building Design",
        "Litigation Support & Expert Witness",
        "Post-Disaster Assessment",
    ],
    notable: [
        {
            name: "The Residences at North Hill",
            loc: "Alexandria, VA",
            type: "Senior Living — 300 units, 420,000 sf",
        },
        {
            name: "The Oxford",
            loc: "Oxon Hill, MD",
            type: "Adaptive Reuse — 195 residential units",
        },
        {
            name: "818 Potomac Ave SE",
            loc: "Washington, DC",
            type: "Multi-Family with underpinning",
        },
        {
            name: "DC Courts Renovation",
            loc: "Washington, DC",
            type: "Government Interior Renovation",
        },
        {
            name: "Riverton Complex",
            loc: "Alexandria, VA",
            type: "Historic Garden Apartments, 1940s",
        },
    ],
    creds: [
        { label: "Registrations", val: "District of Columbia\nMaryland\nVirginia" },
        {
            label: "Education",
            val: "B.S. Civil Engineering\nUniversity of Maryland\nCollege Park, 1994",
        },
        { label: "Associations", val: "ASCE\nAIA Baltimore\nAME Structural Washington" },
    ],
};

export default function People() {
    const p = JON;
    return (
        <div className="page page-fade">
            {/* Hero */}
            <div className="profile-hero">
                <div className="profile-photo">
                    {p.photo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={p.photo}
                            alt={p.name}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    ) : (
                        <div className="profile-photo-placeholder">portrait — jon tung</div>
                    )}
                </div>
                <div className="profile-content">
                    <p className="profile-eyebrow">{p.role}</p>
                    <h1 className="profile-name">{p.name}</h1>
                    <p className="profile-role">
                        Field &amp; Tung Structural Engineers · Washington, DC
                    </p>
                    {p.bio.map((para, i) => (
                        <p key={i} className="profile-bio">
                            {para}
                        </p>
                    ))}
                </div>
            </div>

            {/* Stats strip */}
            <div className="profile-stats">
                {p.stats.map((s) => (
                    <div key={s.label}>
                        <div className="profile-stat-num">{s.num}</div>
                        <div className="profile-stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Expertise */}
            <div className="profile-section">
                <div className="profile-section-label">Areas of Expertise</div>
                <div>
                    <h3>
                        A breadth of practice across
                        <br />
                        structural disciplines.
                    </h3>
                    <div className="profile-expertise">
                        {p.expertise.map((e) => (
                            <span key={e} className="profile-expertise-tag">
                                {e}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Selected Projects */}
            <div className="profile-section">
                <div className="profile-section-label">Selected Projects</div>
                <div>
                    <h3>
                        Representative work led
                        <br />
                        or directly managed.
                    </h3>
                    <div className="profile-list">
                        {p.notable.map((n, i) => (
                            <div key={i} className="profile-list-row">
                                <div className="profile-list-year">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div className="profile-list-name">
                                    {n.name}
                                    <div
                                        style={{
                                            fontSize: 11,
                                            color: "var(--mid)",
                                            marginTop: 4,
                                            fontWeight: 300,
                                        }}
                                    >
                                        {n.loc}
                                    </div>
                                </div>
                                <div className="profile-list-meta">{n.type}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Credentials */}
            <div className="profile-section">
                <div className="profile-section-label">
                    Credentials &amp;
                    <br />
                    Affiliations
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "40px 40px",
                    }}
                >
                    {p.creds.map((c) => (
                        <div key={c.label}>
                            <div className="profile-cred-label">{c.label}</div>
                            <div className="profile-cred-val">{c.val}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="profile-cta">
                <p className="profile-cta-text">
                    Get in touch to discuss <em>your project</em> with Jon directly.
                </p>
                <div className="profile-cta-actions">
                    <Link href="/contact" className="profile-cta-btn">
                        Contact Jon
                    </Link>
                    <Link href="/projects" className="profile-cta-btn secondary">
                        View Projects
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
