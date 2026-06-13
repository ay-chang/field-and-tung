import Link from "next/link";
import Image from "next/image";
import { isMaintenanceOn } from "@/lib/maintenance";

export const dynamic = 'force-dynamic';


export default function Home() {
    if (isMaintenanceOn()) {
        return <div style={{ background: 'white', width: '100vw', height: '100vh' }} />;
    }

    return (
        <div className="page page-fade">
            <div className="home">
                {/* Left: large photo */}
                <div className="home-photo-col">
                    <Image
                        src="/wiltsberger-street.jpg"
                        alt="Wiltsberger Street NW — Adaptive Reuse"
                        width={1200}
                        height={900}
                        priority
                        className="home-photo"
                    />
                    <div className="home-photo-caption">
                        <span className="home-photo-caption-name">
                            Multi-Family Building NW DC
                        </span>
                        <span className="home-photo-caption-type">Adaptive Reuse</span>
                    </div>
                </div>

                {/* Right: tagline + desc */}
                <div className="home-right">
                    <div className="home-right-top">
                        <h1 className="home-tagline">
                            Structural engineering
                            <br />
                            <em>rooted in craft,</em>
                            <br />
                            built for permanence.
                        </h1>
                    </div>
                    <div className="home-right-bottom">
                        <p className="home-desc">
                            A consulting structural engineering firm based in Washington, DC —
                            serving the DMV region and projects nationwide since 2016.
                        </p>
                        <Link href="/projects" className="home-cta">
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
