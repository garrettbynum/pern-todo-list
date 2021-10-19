import React from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = () => {
  return (
    <table class="table mt-5 text-center">
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default Table;
