```VUE


<script>
  // input中键入的内容
  const inputContent = ref();
  // input中键入的内容（HTML格式）
  const inputContentHTML = ref();

  // 全文字数
  const totalWordsCount = ref(0);
  // 敏感词数量
  const sensitiveWordsCount = ref(0);
  // 自定义敏感词数量
  const costomWordsCount = ref(0);

  // 筛查按钮是否处于Disable状态
  const isSearchBtnDisable = ref(true);
  // 筛查按钮是否处于Loading状态
  const isSearchBtnLoading = ref(false);


  // 查询文中敏感词
  const handleSearchSensitive = () => {

    // 按钮状态改变
    isSearchBtnDisable.value = true;
    isSearchBtnLoading.value = true;

    const res = await API(divValue.value, wordType.value);
  };


  // —————————— TOOLS FUNCTION 工具函数 ——————————

  // 过滤高亮样式标签
  const filterTags = (HtmlContent) => {
    
    // 高亮标签汇总
    const highlightTags = [
      "<span class='s-color-1'>",
      "<span class='s-color-99'>",
      "</span>",
    ];

    highlightTags.map((tag) => {
      HtmlContent.value = HtmlContent.value.replace(new RegExp(tag, "g"), "");
    });
  }

</script>


```