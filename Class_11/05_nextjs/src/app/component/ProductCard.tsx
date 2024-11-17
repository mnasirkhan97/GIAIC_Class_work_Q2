import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductCard() {
  return (
    <div>
      <div>
        {/* Product Card */}
        <Image src="/imag_01.jpeg" alt="product 01" width={400} height={300} />
      </div>
    </div>
  );
}

export default ProductCard;
