# NextechProject

This is the project to display news from HackerNews.

I did not have time to add a unit test, but the test would check the HackerNewsService call getTopStories. This test would have to mock the data retruned by each API call to make sure the calls are made in the proper order. The first API would need a list of story IDs mocked, and the second call would be a list of calls to get the article data, including the link to the actual article.

Potential other features to add would have been: Search, Filter/Sort, Dropdown to select story types.
