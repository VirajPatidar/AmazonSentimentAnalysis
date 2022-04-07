# Sentiment Analysis of Amazon Reviews

**Dataset Used:** [https://www.kaggle.com/datasets/bittlingmayer/amazonreviews](https://www.kaggle.com/datasets/bittlingmayer/amazonreviews) <br />
**Link to the Web App:** [https://product-sentiment-analysis.netlify.app/](https://product-sentiment-analysis.netlify.app/)

### Contributors ###
* [Viraj Patidar](https://github.com/VirajPatidar)
* [Naman Mehta](https://github.com/shadyskies)

### Introduction ###
To judge the quality of a product, ratings can be easily sorted and judged whether a product is good or bad. But when it comes to sentence reviews, we need to read through every line to make sure the review conveys a positive or negative sense. Here’s where sentiment analysis comes into play.

Sentiment analysis is the process of identifying feelings and emotions expressed in words, through Artificial Intelligence. It is focused on detecting the underlying semantic meaning of a piece of text.

Sentiment analysis in business empowers companies to spot negative or positive sentiments about their product or service with precision, and take necessary steps to address those areas.
Specific to this project, Amazon being a complete online store, sentiment analysis is of paramount importance.

### Problem Statement ###

To go through all the feedback can be a tedious job. The aim of the project is classification of individual comments/reviews based on their sentiment into a scale of 1 to 5 (very bad to very good). So that the company can get a complete idea on feedback provided by customers and take appropriate actions related to the same.

### Tech Stack ###
* Frontend:		ReactJs
* Backend:		FastAPI
* Model Creation:	Tensorflow, nltk, keras
* Standard/EDA:	numpy, pandas, seaborn, matplotlib
* Evaluation:		sklearn

### Future Scope ###
The model created by us works great with an accuracy of 0.89, however cannot be termed as perfect. A better model can always be developed by tuning the hyperparameters, experimenting with different architectures, different optimization techniques and so on. The model will also be limited by the data it gets, like the numbers of words in the vocabulary. However, these implementations entail a high computational cost.

Currently there are many implementations that are being used and researched in the industry. Some of them are RNN based models, Recursive Neural Tensor Networks and Attention Based neural nets. Naive Bayes – Support Vector Machines (NBSVM), FastText a Supervised Word2Vec model and DeepForest are few non neural network based models that have achieved significant accuracy in analyzing the sentiment of a corpus.

The interest for sentiment analysis in languages other than English is also ever growing, and there is still a lack of resources to research them. As of now the most common lexicon which exists in languages other than English is WordNet.
