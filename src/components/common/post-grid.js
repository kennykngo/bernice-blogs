import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

export default function PostGrid({ posts }) {
  // to show 9 records at a time
  const [pageSize, setPageSize] = useState(9);
  const [current, setCurrent] = useState(1);

  // placing posts in section: renders a subset of array of posts by useMemo()
  // only update when page size changes or page changes
  const paginatedPosts = useMemo(
    () => {
      const lastIndex = current * pageSize;
      const firstIndex = lastIndex - pageSize;

      return posts.slice(firstIndex, lastIndex);
    },
    // passes dependencies to the function to know when to update itself (changing current page or pageSize);
    [current, pageSize]
  );

  return (
    <section className="grid-pagination-container">
      <section className="post-grid container"></section>
      <Pagination
        simple
        showSizeChanger
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total={posts.length}
        defaultCurrent={current}
        onChange={setCurrent}
      />
    </section>
  );
}
