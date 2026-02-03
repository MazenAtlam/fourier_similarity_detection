import { Activity } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <Activity className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">
              Fourier Similarity Detector
            </span>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                        © 2025 Fourier Similarity Detector. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;