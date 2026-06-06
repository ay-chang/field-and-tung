"use client";

import { useState } from "react";
import Image from "next/image";

const PHOTO_PROJECTS = [
    {
        id: 1,
        name: "Potomac Ave SE",
        location: "Washington, DC",
        type: "Multifamily Residential",
        category: "residential",
        img: "/potomac-ave.jpg",
    },
    {
        id: 2,
        name: "Wiltsberger Street NW",
        location: "Washington, DC",
        type: "Adaptive Reuse",
        category: "adaptive",
        img: "/wiltsberger-street.jpg",
    },
    {
        id: 3,
        name: "The Oxford — The Constellation Center",
        location: "Oxon Hill, MD",
        type: "Adaptive Reuse",
        category: "adaptive",
        img: "/the-oxford.jpg",
    },
    {
        id: 4,
        name: "BNSIC",
        location: "Bethesda, MD",
        type: "Federal / Institutional",
        category: "government",
        img: "/bnics.jpg",
    },
    {
        id: 5,
        name: "18th Street NW",
        location: "Washington, DC",
        type: "Multifamily Conversion",
        category: "adaptive",
        img: "/18th-street-multifamily.jpg",
    },
    {
        id: 6,
        name: "Naval Surface Warfare Center",
        location: "Virginia",
        type: "Federal / Government",
        category: "government",
        img: "/naval-surface.png",
    },
    {
        id: 7,
        name: "Northern VA Private School",
        location: "McLean, VA",
        type: "Education",
        category: "education",
        img: "/madeira-school.jpg",
    },
    {
        id: 9,
        name: "National Press Building",
        location: "Washington, DC",
        type: "Commercial",
        category: "commercial",
        img: "/national-press-building.jpg",
    },
];

const LIST_PROJECTS = [
    // Historic
    {
        id: 101,
        name: "Eppington Plantation",
        location: "Chesterfield County, VA",
        type: "Historic Preservation",
        category: "historic",
    },
    {
        id: 102,
        name: "St. Michael's Church Complex",
        location: "Baltimore, MD",
        type: "Historic Preservation",
        category: "historic",
    },
    {
        id: 103,
        name: "Maynard Burgess House",
        location: "Annapolis, MD",
        type: "Historic Preservation",
        category: "historic",
    },
    {
        id: 104,
        name: "1313 Druid Hill Avenue",
        location: "Baltimore, MD",
        type: "Historic Preservation",
        category: "historic",
    },
    {
        id: 107,
        name: "Riverton Complex",
        location: "Alexandria, VA",
        type: "Historic Garden Apartments, 1940s",
        category: "historic",
    },
    // Government
    {
        id: 201,
        name: "Department of Treasury",
        location: "Washington, DC",
        type: "Federal / Government",
        category: "government",
    },
    {
        id: 202,
        name: "Architect of the Capitol",
        location: "Washington, DC",
        type: "Federal / Institutional",
        category: "government",
    },
    {
        id: 203,
        name: "National Institutes of Health",
        location: "Bethesda, MD",
        type: "Federal / Institutional",
        category: "government",
    },
    {
        id: 204,
        name: "Fairfax County Courthouse",
        location: "Fairfax, VA",
        type: "Government / Civic",
        category: "government",
    },
    {
        id: 205,
        name: "DC Courts Renovation",
        location: "Washington, DC",
        type: "Government Interior Renovation",
        category: "government",
    },
    // Hospitality
    {
        id: 301,
        name: "Hilton Garden Inn",
        location: "Baltimore, MD",
        type: "Hospitality",
        category: "hospitality",
    },
    {
        id: 302,
        name: "TownePlace Suites",
        location: "Aberdeen, MD",
        type: "Hospitality",
        category: "hospitality",
    },
    {
        id: 303,
        name: "Cambria Baltimore Street",
        location: "Baltimore, MD",
        type: "Hospitality",
        category: "hospitality",
    },
    {
        id: 304,
        name: "Candlewood Suites",
        location: "Baltimore, MD",
        type: "Hospitality",
        category: "hospitality",
    },
    {
        id: 305,
        name: "Best Western Plus",
        location: "Hershey, PA",
        type: "Hospitality",
        category: "hospitality",
    },
    {
        id: 306,
        name: "Hotel at 612 Cathedral Street",
        location: "Baltimore, MD",
        type: "Hospitality / Adaptive Reuse",
        category: "hospitality",
    },
    // Education (additional)
    {
        id: 401,
        name: "Diener School",
        location: "Bethesda, MD",
        type: "Education",
        category: "education",
    },
    {
        id: 402,
        name: "Mount Vernon Elementary",
        location: "Alexandria, VA",
        type: "Education",
        category: "education",
    },
    {
        id: 403,
        name: "Gallaudet University",
        location: "Washington, DC",
        type: "Education / Institutional",
        category: "education",
    },
    {
        id: 404,
        name: "St. John's College High School",
        location: "Washington, DC",
        type: "Education",
        category: "education",
    },
    {
        id: 406,
        name: "Francis-Stevens Elementary",
        location: "Washington, DC",
        type: "Education",
        category: "education",
    },
    {
        id: 407,
        name: "Mount St. Mary's University",
        location: "Emmitsburg, MD",
        type: "Education / Institutional",
        category: "education",
    },
    {
        id: 408,
        name: "Johns Hopkins Krieger Hall",
        location: "Baltimore, MD",
        type: "Education / Institutional",
        category: "education",
    },
    // Faith-Based
    {
        id: 501,
        name: "Basilica of the National Shrine",
        location: "Washington, DC",
        type: "Faith-Based / Institutional",
        category: "faith",
    },
    {
        id: 502,
        name: "ADAMS Center",
        location: "Gainesville, VA",
        type: "Faith-Based",
        category: "faith",
    },
    {
        id: 503,
        name: "Redeemer City Church",
        location: "Washington, DC",
        type: "Faith-Based",
        category: "faith",
    },
    // Commercial (additional)
    {
        id: 601,
        name: "1700 K Street NW",
        location: "Washington, DC",
        type: "Commercial",
        category: "commercial",
    },
    {
        id: 602,
        name: "1900 K Street NW",
        location: "Washington, DC",
        type: "Commercial",
        category: "commercial",
    },
    {
        id: 603,
        name: "Freddie Mac",
        location: "Herndon, VA",
        type: "Commercial / Corporate",
        category: "commercial",
    },
    {
        id: 604,
        name: "5 Thomas Circle NW",
        location: "Washington, DC",
        type: "Commercial",
        category: "commercial",
    },
    {
        id: 606,
        name: "1763 Columbia Road NW",
        location: "Washington, DC",
        type: "Commercial",
        category: "commercial",
    },
    {
        id: 607,
        name: "424 N Washington Street",
        location: "Alexandria, VA",
        type: "Commercial",
        category: "commercial",
    },
    // Residential / Multi-Family
    {
        id: 701,
        name: "The Residences at North Hill",
        location: "Alexandria, VA",
        type: "Senior Living — 300 units, 420,000 sf",
        category: "residential",
    },
    {
        id: 702,
        name: "1724 Kalorama Road NW",
        location: "Washington, DC",
        type: "Multifamily Residential",
        category: "residential",
    },
    {
        id: 703,
        name: "Friends House",
        location: "Sandy Spring, MD",
        type: "Senior Living / Residential",
        category: "residential",
    },
    {
        id: 704,
        name: "211 W Franklin Street",
        location: "Baltimore, MD",
        type: "Multifamily Residential",
        category: "residential",
    },
    // Single Family Residential
    {
        id: 801,
        name: "Queenstown Residence",
        location: "Queenstown, MD",
        type: "Single Family Residential",
        category: "residential",
    },
    {
        id: 802,
        name: "Annapolis Residence",
        location: "Annapolis, MD",
        type: "Single Family Residential",
        category: "residential",
    },
    {
        id: 803,
        name: "Gaithersburg Residence",
        location: "Gaithersburg, MD",
        type: "Single Family Residential",
        category: "residential",
    },
    {
        id: 804,
        name: "Friendship Residence",
        location: "Washington, DC",
        type: "Single Family Residential",
        category: "residential",
    },
    {
        id: 805,
        name: "Fairfax Residence",
        location: "Fairfax, VA",
        type: "Single Family Residential",
        category: "residential",
    },
];

const FILTERS = [
    { key: "all", label: "All" },
    { key: "residential", label: "Residential" },
    { key: "adaptive", label: "Adaptive Reuse" },
    { key: "historic", label: "Historic" },
    { key: "education", label: "Education" },
    { key: "government", label: "Government" },
    { key: "commercial", label: "Commercial" },
    { key: "hospitality", label: "Hospitality" },
    { key: "faith", label: "Faith-Based" },
];

export default function Projects() {
    const [filter, setFilter] = useState("all");

    const filteredPhoto =
        filter === "all"
            ? PHOTO_PROJECTS
            : PHOTO_PROJECTS.filter((p) => p.category === filter);
    const filteredList =
        filter === "all" ? LIST_PROJECTS : LIST_PROJECTS.filter((p) => p.category === filter);

    return (
        <div className="page page-fade">
            <div className="projects-header">
                <h1 className="projects-title">Projects</h1>
                <div className="projects-filters">
                    {FILTERS.map((f) => (
                        <button
                            key={f.key}
                            className={`filter-btn${filter === f.key ? " active" : ""}`}
                            onClick={() => setFilter(f.key)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            {filteredPhoto.length > 0 && (
                <div className="projects-grid">
                    {filteredPhoto.map((p) => (
                        <div key={p.id} className="project-card">
                            <div className="project-img">
                                <Image
                                    src={p.img}
                                    alt={p.name}
                                    width={800}
                                    height={600}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />
                            </div>
                            <div className="project-meta">
                                <div className="project-meta-name">{p.name}</div>
                                <div className="project-meta-sub">
                                    {p.location} · {p.type}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {filteredList.length > 0 && (
                <div className="projects-list-section">
                    <div className="projects-list-label">Additional Projects</div>
                    {filteredList.map((p) => (
                        <div key={p.id} className="project-row">
                            <div className="project-row-name">{p.name}</div>
                            <div className="project-row-location">{p.location}</div>
                            <div className="project-row-type">{p.type}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
