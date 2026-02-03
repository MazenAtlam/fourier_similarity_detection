import {Link} from "react-router-dom";
import Button from "../ui/Button.jsx";
import {ArrowLeft, Trophy} from "lucide-react";

const PagesNavbar = ({
    pageTitle,
    pageDescription,
                     }) => {
    return (
        <div className="row mb-4">
            <div className="col-12">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                    <div className="d-flex align-items-center gap-3">
                        <Link to="/">
                            <Button
                                variant="light"
                                className="rounded-circle p-2 border-0"
                            >
                                <ArrowLeft style={{ width: "20px", height: "20px" }} />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="h2 fw-bold text-dark d-flex align-items-center gap-3 mb-2">
                                <div
                                    className="rounded-3 bg-gradient p-2 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        background:
                                            "linear-gradient(to bottom right, var(--accent), var(--accent-light))",
                                    }}
                                >
                                    <Trophy
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                            color: "var(--accent-foreground)",
                                        }}
                                    />
                                </div>
                                {pageTitle}
                            </h1>
                            <p className="text-muted mb-0">
                                {pageDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PagesNavbar;