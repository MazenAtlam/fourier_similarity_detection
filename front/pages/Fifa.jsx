import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trophy } from "lucide-react";
import Layout from "../src/components/layout/Layout";
import FifaForm from "../src/components/fifa/FifaForm";
import FifaResults from "../src/components/fifa/FifaResults";
import FootballPitch from "../src/components/fifa/FootballPitch";
import PositionCharts from "../src/components/fifa/PositionCharts";
import Button from "../src/components/ui/Button";
import {
  detectPassSequenceById,
  detectPassSequenceByMetadata,
  PassSequenceResult,
} from "@/lib/api";
import { toast } from "@/hooks/use-toast";
import PagesNavbar from "../src/components/layout/PagesNavbar.jsx";

const Fifa = () => {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputSequence, setInputSequence] = useState(null);

  const handleSearchByMetadata = async (data) => {
    setIsLoading(true);
    setSelectedResult(null);

    try {
      const response = await detectPassSequenceByMetadata(
        data.players,
        data.stage,
        data.group,
        data.date,
        data.match,
      );

      if (response.status === "success" && response.results) {
        setResults(response.results);
        // Set input sequence from first result for visualization
        if (response.results.length > 0) {
          setInputSequence(response.results[0].inputCoordinates);
        }
        toast({
          title: "Search Complete",
          description: `Found ${response.results.length} matching sequences.`,
        });
      } else {
        setResults([]);
        setInputSequence(null);
        toast({
          title: "No Matches Found",
          description: response.error || "Try adjusting your search criteria.",
          variant: "destructive",
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to search sequences. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUploadSequence = async () => {
    setIsLoading(true);
    setSelectedResult(null);

    try {
      const response = await detectPassSequenceById("mock-sequence-id");

      if (response.status === "success" && response.results) {
        setResults(response.results);
        if (response.results.length > 0) {
          setInputSequence(response.results[0].inputCoordinates);
        }
        toast({
          title: "Upload Complete",
          description: "Sequence uploaded and analyzed successfully.",
        });
      } else {
        toast({
          title: "Upload Failed",
          description: "Could not analyze the uploaded sequence.",
          variant: "destructive",
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload sequence. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout
      pageTitle="FIFA World Cup 2022 Sequence Detector"
      pageDescription="Analyze and compare pass sequences from the World Cup"
    >
      <div className="container-fluid py-5">
        {/* Content */}
        <div className="row g-4">
          {/* Input Form - Full Width */}
          <div className="col-12">
            <FifaForm
              onSearchByMetadata={handleSearchByMetadata}
              onUploadSequence={handleUploadSequence}
              isLoading={isLoading}
            />
          </div>

          {/* Matching Sequences */}
          <div className="col-12">
            <FifaResults
              results={results}
              selectedResult={selectedResult}
              onSelectResult={setSelectedResult}
              isLoading={isLoading}
            />
          </div>

          {/* Football Pitch */}
          <div className="col-12">
            <FootballPitch
              inputSequence={inputSequence}
              selectedResult={selectedResult}
            />
          </div>

          {/* Position Charts - Full Width */}
          <div className="col-12">
            <PositionCharts
              inputSequence={inputSequence}
              selectedResult={selectedResult}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Fifa;

<style jsx>{`
  :root {
    --accent: #3b82f6;
    --accent-light: #93c5fd;
    --accent-foreground: #ffffff;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
  }
`}</style>;
