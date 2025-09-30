// main.ts

// Interface for MajorCredits
interface MajorCredits {
    credits: number;
    // branding property to make MajorCredits unique
    _brand: "major";
  }
  
  // Interface for MinorCredits
  interface MinorCredits {
    credits: number;
    // branding property to make MinorCredits unique
    _brand: "minor";
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(
    subject1: MajorCredits,
    subject2: MajorCredits
  ): MajorCredits {
    return { credits: subject1.credits + subject2.credits, _brand: "major" };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(
    subject1: MinorCredits,
    subject2: MinorCredits
  ): MinorCredits {
    return { credits: subject1.credits + subject2.credits, _brand: "minor" };
  }
  
  // Example usage
  const major1: MajorCredits = { credits: 3, _brand: "major" };
  const major2: MajorCredits = { credits: 4, _brand: "major" };
  
  const minor1: MinorCredits = { credits: 2, _brand: "minor" };
  const minor2: MinorCredits = { credits: 1, _brand: "minor" };
  
  console.log("Total Major Credits:", sumMajorCredits(major1, major2));
  console.log("Total Minor Credits:", sumMinorCredits(minor1, minor2));
  