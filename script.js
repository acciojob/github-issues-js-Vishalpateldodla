const issuesList = document.getElementById("issues-list");
      let currentPage = 1;

      // Fetch issues from the GitHub API and display them in the list
      async function fetchIssues(pageNumber) {
        const apiUrl = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`;
        const response = await fetch(apiUrl);
        const issues = await response.json();
        issuesList.innerHTML = "";
        issues.forEach((issue) => {
          const issueItem = document.createElement("li");
          issueItem.textContent = issue.title;
          issuesList.appendChild(issueItem);
        });
      }

      // Load the first page of issues on page load
      window.addEventListener("load", () => {
        fetchIssues(currentPage);
      });

      // Load the previous page of issues and update the page number
      const loadPrevButton = document.getElementById("load-prev");
      loadPrevButton.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          document.querySelector("h1").textContent = `Page number ${currentPage}`;
          fetchIssues(currentPage);
        }
      });

      // Load the next page of issues and update the page number
      const loadNextButton = document.getElementById("load-next");
      loadNextButton.addEventListener("click", () => {
        currentPage++;
        document.querySelector("h1").textContent = `Page number ${currentPage}`;
        fetchIssues(currentPage);
      });