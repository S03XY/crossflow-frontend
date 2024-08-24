"use client";
import { FaArrowRightLong } from "react-icons/fa6";

const HistoryPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-white/50">History</h1>

      <div className="mt-6 space-y-4">
        {[1, 1, 1, 1, 1].map((d, i) => (
          <div
            className="p-3 border border-white/50 rounded-lg space-y-4"
            key={i}
          >
            <div className="flex justify-between items-center space-x-2">
              <div className="flex justify-start items-center">
                <h1>{i + 1}.</h1>
                <h1 className="flex justify-start items-center space-x-2">
                  Polygon{" "}
                  <span className="mx-2">
                    <FaArrowRightLong />
                  </span>{" "}
                  Ethereum
                </h1>
              </div>

              <div className="px-4 py-1 rounded-full bg-green-500 text-sm">success</div>
            </div>

            <div className="space-y-2">
              <p>
                Polygon:{" "}
                <span className="mx-1">
                  0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
                </span>
              </p>
              <p>
                Polygon:{" "}
                <span className="mx-1">
                  0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
                </span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
