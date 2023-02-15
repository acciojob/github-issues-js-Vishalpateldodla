const issueList = document.getElementById('issue-list');
const pageNumber = document.getElementById('page-number');
let currentPage = 1;

// function to fetch and display issues
async function displayIssues(page) {
  const response = await fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`);
  const issues = await response.json();

  issueList.innerHTML = '';
  issues.forEach(issue => {
    const issueName = document.createElement('li');
    issueName.textContent = issue.title;
    issueList.appendChild(issueName);
  });
}

// initial display of issues on page load
displayIssues(currentPage);

// function to handle loading next page of issues
document.getElementById('load-prev').addEventListener('click', () => {
  currentPage++;
  pageNumber.textContent = `Page number ${currentPage}`;
  displayIssues(currentPage);
});

// function to handle loading previous page of issues
document.getElementById('load-next').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    pageNumber.textContent = `Page number ${currentPage}`;
    displayIssues(currentPage);
  }
});
