
import React from "react";
import PDFViwer from "../components/PDFViwer";
import Header from "../components/Header";

export default function Resume() {
  return (
    <div className="App">
        <Header></Header>
        <PDFViwer pdf={'ieuan-israel-resume.pdf'}></PDFViwer>
    </div>
  );
}