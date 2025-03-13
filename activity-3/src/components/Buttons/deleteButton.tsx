"use client";
import React, { useState, useEffect } from "react";

const DeleteButton: React.FC = () => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
