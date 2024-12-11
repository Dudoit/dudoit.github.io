```JAVA
public SensitiveVO searchContent(String content) {

    List<SensitiveWords> allSensitiveWords = sensitiveMapper.selectAll();
    // 敏感词数量
    Integer sLevelACount = 0;

    // 遍历关键词，替换匹配的部分
    for (SensitiveWords sensitiveWords : allSensitiveWords) {
        content = content.replaceAll("(?i)" + Pattern.quote(sensitiveWords.getWords()), "<span>" + sensitiveWords.getWords() + "</span>");
        sLevelACount += 1;
    }

    return SensitiveVO.builder()
            .content(content)
            .sLevelACount(1)
            .build();
}


public SensitiveVO searchContent(String content) {
    List<String> allSensitiveWords = ['趁现在','恭喜获奖','专家推荐','正品','医生认证'];
    Map<String, Integer> keywordCountMap = new HashMap<>();
    StringBuilder highlightedContent = new StringBuilder(content);

    // 使用正则表达式处理多个关键词匹配
    String regex = String.join("|", allSensitiveWords);
    Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);

    Matcher matcher = pattern.matcher(content);
    int totalKeywordCount = 0;

    while (matcher.find()) {
        String matchedKeyword = matcher.group();
        keywordCountMap.put(matchedKeyword, keywordCountMap.getOrDefault(matchedKeyword, 0) + 1);
        totalKeywordCount++;
    }

    matcher.reset();
    StringBuffer result = new StringBuffer();

    while (matcher.find()) {
        String matchedKeyword = matcher.group();
        matcher.appendReplacement(result, "<span>" + matchedKeyword + "</span>");
    }
    matcher.appendTail(result);

    // 敏感词数量
    Integer sLevelACount = 0;

    // 遍历关键词，替换匹配的部分
    for (SensitiveWords sensitiveWords : allSensitiveWords) {
        String replacement = "<span>" + sensitiveWords.getWords() + "</span>";
        String newContent = content.replaceAll("(?i)" + Pattern.quote(sensitiveWords.getWords()), replacement);
        int count = (content.length() - newContent.length()) / sensitiveWords.getWords().length();
        sLevelACount += count;
        content = newContent;
    }

    return SensitiveVO.builder()
            .content(result.toString())
            .sLevelACount(totalKeywordCount)
            .build();
}
```

```JAVA
// KeywordService.java
@Service
public class KeywordService {

    @Autowired
    private KeywordRepository keywordRepository;

    public List<String> getKeywords() {
        return keywordRepository.findAllKeywords();
    }

    public HighlightedArticleResponse highlightKeywords(String article) {
        List<String> keywords = getKeywords();
        int keywordCount = 0;

        for (String keyword : keywords) {
            String replacement = "<span>" + keyword + "</span>";
            String newArticle = article.replaceAll("(?i)" + Pattern.quote(keyword), replacement);
            int count = (article.length() - newArticle.length()) / keyword.length();
            keywordCount += count;
            article = newArticle;
        }

        return new HighlightedArticleResponse(article, keywordCount);
    }
}

```


```JAVA
import java.util.*;
import java.util.regex.*;

@Service
public class KeywordService {

    @Autowired
    private KeywordRepository keywordRepository;

    public List<String> getKeywords() {
        return keywordRepository.findAllKeywords();
    }

    public HighlightedArticleResponse highlightKeywords(String article) {
        List<String> keywords = getKeywords();
        Map<String, Integer> keywordCountMap = new HashMap<>();
        StringBuilder highlightedArticle = new StringBuilder(article);

        // 使用正则表达式处理多个关键词匹配
        String regex = String.join("|", keywords);
        Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);

        Matcher matcher = pattern.matcher(article);
        int totalKeywordCount = 0;

        while (matcher.find()) {
            String matchedKeyword = matcher.group();
            keywordCountMap.put(matchedKeyword, keywordCountMap.getOrDefault(matchedKeyword, 0) + 1);
            totalKeywordCount++;
        }

        // 替换文章中的关键词为带有<span>标签的形式
        matcher.reset(); // 重置matcher，准备替换
        StringBuffer result = new StringBuffer();

        while (matcher.find()) {
            String matchedKeyword = matcher.group();
            matcher.appendReplacement(result, "<span>" + matchedKeyword + "</span>");
        }
        matcher.appendTail(result);

        return new HighlightedArticleResponse(result.toString(), totalKeywordCount);
    }
}

```

在这个快节奏的时代，每一刻都充满了无限可能，因此，“<span>趁现在</span>”成为了我们心中<span>最</span>响亮的号角。它提醒我们，无论是追求梦想还是把握机遇，都不应等待明天，因为现在就是<span>最</span>好的开始。<span>最</span>近，我们欣喜地看到，在一场激烈的竞争中，有一位才华横溢的朋友“<span>恭喜获奖</span>”。这份荣誉不仅是对他个人努力的肯定，也是对所有坚持梦想、勇于挑战者的鼓舞。他的成功故事告诉我们，只要付出，总会有回报。此次获奖作品中，有一款产品特别引人注目，它得到了“<span>专家推荐</span>”。这些专家在各自领域深耕多年，他们的认可无疑为产品增添了沉甸甸的分量。这款产品不仅功能卓越，而且品质上乘，是真正的“<span>正品</span>”，让消费者在购买时能够安心无忧。更令人信服的是，该产品还获得了“<span>医生认证</span>”。在健康日益受到重视的今天，医生的意见无疑是消费者做出选择的重要参考。这一认证不仅证明了产品的安全性和有效性，更体现了制造商对消费者健康的深切关怀。<span>趁现在</span>，让我们一同为这位获奖者喝彩，同时也为那些经过<span>专家推荐</span>、<span>医生认证</span>的<span>正品</span>点赞。在这个充满挑战与机遇的时代，选择正确的方向，坚持自己的信念，我们每个人都能成为自己领域的佼佼者。让我们携手前行，在追梦的路上不断创造属于自己的辉煌！