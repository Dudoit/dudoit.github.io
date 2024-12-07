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


<v-col cols="4">
  <v-card elevation="10 ticket" >
    <v-card-item>
      <v-card-title class="text-h5">查询结果</v-card-title>
        <v-card-subtitle class="text-subtitle-1 textSecondary">Search Result</v-card-subtitle>
        <v-row>
            <v-col cols="6" sm="6" class="d-flex">
                <div class="d-flex align-center mt-md-6 mt-3">
                    <v-avatar class="rounded-md bg-lightwarning text-warning">
                        <GridDotsIcon size="22" />
                    </v-avatar>
                    <div class="pl-4">
                        <h6 class="text-subtitle-1 textSecondary mb-1">敏感词个数</h6>
                        <h3 class="text-h6">18</h3>
                    </div>
                </div>
            </v-col>
            <v-col cols="6" sm="6" class="d-flex justify-lg-start justify-end">
                <div class="d-flex align-center mt-md-6 mt-3">
                    <v-avatar class="rounded-md bg-lightsecondary text-secondary">
                        <GridDotsIcon size="22" />
                    </v-avatar>
                    <div class="pl-4">
                        <h6 class="text-subtitle-1 textSecondary mb-1">词库个数</h6>
                        <h3 class="text-h6">6</h3>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-card-item>
  </v-card>
</v-col>

<v-col cols="12">
  <p class="text-body-2">本站提供的检测结果仅供用户参考，不构成任何法律意见或对广告合规性的保证，不能作为法律依据</p>
  <p class="text-body-2">Copyright©2024 竹知 All Rights Reserved 豫ICP备17023123号-21</p>
</v-col>
```

本站提供的检测结果仅供用户参考，不构成任何法律意见或对广告合规性的保证，不能作为法律依据