"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5704],{98038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(74848),i=t(28453);const r={slug:"impl-normalized-levenshtein-similarity",title:"\u5be6\u4f5c ANLS",authors:"Zephyr",image:"/img/2024/0516.webp",tags:["python","pytorch","metric","anls"],description:"Average Normalized Levenshtein Similarity"},o=void 0,l={permalink:"/blog/impl-normalized-levenshtein-similarity",source:"@site/blog/2024/05-16-impl-normalized-levenshtein-similarity/index.md",title:"\u5be6\u4f5c ANLS",description:"Average Normalized Levenshtein Similarity",date:"2024-05-16T00:00:00.000Z",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"pytorch",permalink:"/blog/tags/pytorch"},{label:"metric",permalink:"/blog/tags/metric"},{label:"anls",permalink:"/blog/tags/anls"}],readingTime:6.89,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"impl-normalized-levenshtein-similarity",title:"\u5be6\u4f5c ANLS",authors:"Zephyr",image:"/img/2024/0516.webp",tags:["python","pytorch","metric","anls"],description:"Average Normalized Levenshtein Similarity"},unlisted:!1,nextItem:{title:"Python \u8207 JS \u7684\u57fa\u672c\u6307\u4ee4\u5c0d\u61c9",permalink:"/blog/npm-npx-nvm-python-analogues-zh"}},a={authorsImageUrls:[void 0]},c=[{value:"\u5c0e\u5165\u5fc5\u8981\u7684\u5eab",id:"\u5c0e\u5165\u5fc5\u8981\u7684\u5eab",level:2},{value:"\u5be6\u4f5c\u6a19\u6e96\u5316\u529f\u80fd",id:"\u5be6\u4f5c\u6a19\u6e96\u5316\u529f\u80fd",level:2},{value:"\u5be6\u4f5c <code>reduction</code> \u53c3\u6578",id:"\u5be6\u4f5c-reduction-\u53c3\u6578",level:2},{value:"\u5b8c\u6574\u7684\u5be6\u4f5c",id:"\u5b8c\u6574\u7684\u5be6\u4f5c",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("figure",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"title",src:t(65475).A+"",width:"1024",height:"1024"}),"\n",(0,s.jsx)("figcaption",{children:"\u5c01\u9762\u5716\u7247\uff1a\u7531 GPT-4 \u95b1\u8b80\u672c\u6587\u4e4b\u5f8c\u81ea\u52d5\u751f\u6210"})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Average Normalized Levenshtein Similarity\uff0c\u7c21\u7a31 ANLS\uff0c\u662f\u4e00\u7a2e\u7528\u65bc\u8a08\u7b97\u5169\u500b\u5b57\u7b26\u4e32\u4e4b\u9593\u76f8\u4f3c\u6027\u7684\u6307\u6a19\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u81ea\u7136\u8a9e\u8a00\u8655\u7406\uff08NLP\uff09\u4e2d\uff0c\u6211\u5011\u7d93\u5e38\u9700\u8981\u6bd4\u8f03\u5169\u500b\u5b57\u7b26\u4e32\u7684\u76f8\u4f3c\u6027\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["Levenshtein Similarity \u662f\u4e00\u7a2e\u5e38\u898b\u7684\u5ea6\u91cf\u65b9\u6cd5\uff0c\u5b83\u8861\u91cf\u4e86\u5169\u500b\u5b57\u7b26\u4e32\u4e4b\u9593\u7684\u300c",(0,s.jsx)(n.strong,{children:"\u7de8\u8f2f\u8ddd\u96e2"}),"\u300d\uff0c\u5373\u901a\u904e\u591a\u5c11\u6b21\u63d2\u5165\u3001\u522a\u9664\u6216\u66ff\u63db\u64cd\u4f5c\u53ef\u4ee5\u5c07\u4e00\u500b\u5b57\u7b26\u4e32\u8f49\u63db\u70ba\u53e6\u4e00\u500b\u5b57\u7b26\u4e32\u3002\u7136\u800c\uff0cLevenshtein Similarity \u672c\u8eab\u4e26\u4e0d\u76f4\u89c0\uff0c\u56e0\u70ba\u5b83\u53d6\u6c7a\u65bc\u5b57\u7b26\u4e32\u7684\u9577\u5ea6\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u6211\u5011\u53ef\u4ee5\u5c07 Levenshtein Similarity \u6a19\u6e96\u5316\u70ba [0, 1] \u5340\u9593\uff0c\u9019\u6a23\u6211\u5011\u5c31\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u7406\u89e3\u548c\u6bd4\u8f03\u4e0d\u540c\u5b57\u7b26\u4e32\u4e4b\u9593\u7684\u76f8\u4f3c\u6027\uff0c\u7a31\u70ba Normalized Levenshtein Similarity\uff08NLS\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u65bc NLS \u6307\u7684\u662f\u4e00\u7d44\u5b57\u4e32\u4e4b\u9593\u7684\u76f8\u4f3c\u6027\uff0c\u6211\u5011\u53ef\u4ee5\u5c07\u5176\u9032\u4e00\u6b65\u64f4\u5c55\u70ba ANLS\uff0c\u5373 Average Normalized Levenshtein Similarity\uff0c\u5b83\u8a08\u7b97\u4e86\u591a\u7d44\u5b57\u4e32\u4e4b\u9593\u7684\u5e73\u5747\u76f8\u4f3c\u6027\uff0c\u85c9\u6b64\u4f86\u6a6b\u91cf\u6a21\u578b\u7684\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u5f8c..."}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u7e3d\u662f\u627e\u4e0d\u5230\u559c\u6b61\u7684\u5be6\u4f5c\uff0c\u6700\u5f8c\u6c7a\u5b9a\u81ea\u5df1\u5beb\u4e00\u500b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5c0e\u5165\u5fc5\u8981\u7684\u5eab",children:"\u5c0e\u5165\u5fc5\u8981\u7684\u5eab"}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u6211\u5011\u9700\u8981\u5c0e\u5165\u4e00\u4e9b\u5fc5\u8981\u7684\u5eab\uff0c\u7279\u5225\u662f\u7531 ",(0,s.jsx)(n.code,{children:"torchmetrics"})," \u5be6\u4f5c\u7684 ",(0,s.jsx)(n.code,{children:"EditDistance"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from typing import Any, Literal, Optional, Sequence, Union\n\nimport torch\nfrom torch import Tensor\nfrom torchmetrics.metric import Metric\nfrom torchmetrics.text import EditDistance\nfrom torchmetrics.utilities.data import dim_zero_cat\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u65bc ",(0,s.jsx)(n.code,{children:"EditDistance"})," \u5df2\u7d93\u53ef\u4ee5\u8a08\u7b97 Levenshtein \u8ddd\u96e2\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b83\u4f86\u8a08\u7b97\u5169\u500b\u5b57\u7b26\u4e32\u4e4b\u9593\u7684\u7de8\u8f2f\u8ddd\u96e2\u3002\u7136\u800c\uff0c",(0,s.jsx)(n.code,{children:"EditDistance"})," \u4e26\u6c92\u6709\u63d0\u4f9b\u6a19\u6e96\u5316\u7684\u529f\u80fd\uff0c\u6240\u4ee5\u6211\u5011\u9700\u8981\u81ea\u5df1\u5be6\u73fe\u9019\u4e00\u90e8\u5206\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5be6\u4f5c\u6a19\u6e96\u5316\u529f\u80fd",children:"\u5be6\u4f5c\u6a19\u6e96\u5316\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u9019\u88e1\uff0c\u6211\u5011\u7e7c\u627f ",(0,s.jsx)(n.code,{children:"torchmetrics.metric.Metric"})," \u7684\u4ecb\u9762\uff0c\u6240\u4ee5\u6211\u5011\u9700\u8981\u5be6\u4f5c ",(0,s.jsx)(n.code,{children:"update"})," \u548c ",(0,s.jsx)(n.code,{children:"compute"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class NormalizedLevenshteinSimilarity(Metric):\n\n    def __init__(\n        self,\n        substitution_cost: int = 1,\n        reduction: Optional[Literal["mean", "sum", "none"]] = "mean",\n        **kwargs: Any\n    ) -> None:\n        super().__init__(**kwargs)\n        self.edit_distance = EditDistance(\n            substitution_cost=substitution_cost,\n            reduction=None  # Set to None to get distances for all string pairs\n        )\n\n        # ...\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u88e1\u6709\u5e7e\u500b\u8981\u9ede\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u78ba\u4fdd\u8f38\u5165\u7684 ",(0,s.jsx)(n.code,{children:"preds"})," \u548c ",(0,s.jsx)(n.code,{children:"target"})," \u662f\u5b57\u7b26\u4e32\u5217\u8868\uff0c\u5426\u5247\u51fd\u6578\u5c31\u6703\u8a08\u7b97\u5230\u300c\u5b57\u5143\u300d\u7684\u90e8\u5206\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u8a08\u7b97\u6bcf\u500b\u5b57\u7b26\u4e32\u7684\u6700\u5927\u9577\u5ea6\uff0c\u9019\u6a23\u624d\u80fd\u9032\u884c\u6a19\u6e96\u5316\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def update(self, preds: Union[str, Sequence[str]], target: Union[str, Sequence[str]]) -> None:\n    """Update state with predictions and targets."""\n\n    if isinstance(preds, str):\n        preds = [preds]\n    if isinstance(target, str):\n        target = [target]\n\n    distances = self.edit_distance(preds, target)\n    max_lengths = torch.tensor([\n        max(len(p), len(t))\n        for p, t in zip(preds, target)\n    ], dtype=torch.float)\n\n    ratio = torch.where(\n        max_lengths == 0,\n        torch.zeros_like(distances).float(),\n        distances.float() / max_lengths\n    )\n\n    nls_values = 1 - ratio\n\n    # ...\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"\u5be6\u4f5c-reduction-\u53c3\u6578",children:["\u5be6\u4f5c ",(0,s.jsx)(n.code,{children:"reduction"})," \u53c3\u6578"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u5011\u9084\u9700\u8981\u4fdd\u7559 ",(0,s.jsx)(n.code,{children:"reduction"})," \u53c3\u6578\u7684\u767c\u63ee\u7a7a\u9593\uff0c\u5982\u679c\u6211\u5011\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"mean"}),"\uff0c\u90a3\u5c31\u662f\u5e38\u898b\u7684 ANLS \u5206\u6578\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9664\u4e86\u4e00\u822c\u7684 ",(0,s.jsx)(n.code,{children:"mean"}),"\uff0c\u6211\u5011\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"sum"})," \u6216 ",(0,s.jsx)(n.code,{children:"none"}),"\uff0c\u4f86\u5b8c\u6210\u4e0d\u540c\u7684\u9700\u6c42\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def _compute(\n    self,\n    nls_score: Tensor,\n    num_elements: Union[Tensor, int],\n) -> Tensor:\n    """Compute the ANLS over state."""\n    if nls_score.numel() == 0:\n        return torch.tensor(0, dtype=torch.int32)\n    if self.reduction == "mean":\n        return nls_score.sum() / num_elements\n    if self.reduction == "sum":\n        return nls_score.sum()\n    if self.reduction is None or self.reduction == "none":\n        return nls_score\n\ndef compute(self) -> torch.Tensor:\n    """Compute the NLS over state."""\n    if self.reduction == "none" or self.reduction is None:\n        return self._compute(dim_zero_cat(self.nls_values_list), 1)\n    return self._compute(self.nls_score, self.num_elements)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u88e1\u9700\u8981\u6ce8\u610f\u7684\u90e8\u5206\u662f\u7576\u6211\u5011\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"reduction"})," \u70ba ",(0,s.jsx)(n.code,{children:"none"})," \u6642\uff0c\u6211\u5011\u9700\u8981\u5c07\u6240\u6709\u7684 NLS \u503c\u8fd4\u56de\uff0c\u800c\u4e0d\u662f\u8a08\u7b97\u5e73\u5747\u503c\u3002\u9019\u908a\u6211\u53c3\u8003\u4e86 ",(0,s.jsx)(n.code,{children:"torchmetrics.text.EditDistance"})," \u7684\u5be6\u73fe\u65b9\u5f0f\uff0c\u4f7f\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"dim_zero_cat"})," \u4f86\u5c07\u5217\u8868\u4e2d\u7684\u503c\u62fc\u63a5\u5728\u4e00\u8d77\uff0c\u78ba\u4fdd\u56de\u50b3\u7684\u662f\u4e00\u500b ",(0,s.jsx)(n.code,{children:"Tensor"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b8c\u6574\u7684\u5be6\u4f5c",children:"\u5b8c\u6574\u7684\u5be6\u4f5c"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u6211\u5011\u5c07\u7a0b\u5f0f\u540c\u6b65\u66f4\u65b0\u5230 ",(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/main/docsaidkit/torch/metrics/normalized_levenshtein_similarity.py",children:(0,s.jsx)(n.strong,{children:"DocsaidKit/.../normalized_levenshtein_similarity.py"})})]})}),"\n",(0,s.jsx)(n.p,{children:"\u5b8c\u6574\u7684\u5be6\u4f5c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from typing import Any, Literal, Optional, Sequence, Union\n\nimport torch\nfrom torch import Tensor\nfrom torchmetrics.metric import Metric\nfrom torchmetrics.text import EditDistance\nfrom torchmetrics.utilities.data import dim_zero_cat\n\n\nclass NormalizedLevenshteinSimilarity(Metric):\n    """\n    Normalized Levenshtein Similarity (NLS) is a metric that computes the\n    normalized Levenshtein similarity between two sequences.\n    This metric is calculated as 1 - (levenshtein_distance / max_length),\n    where `levenshtein_distance` is the Levenshtein distance between the two\n    sequences and `max_length` is the maximum length of the two sequences.\n\n    NLS aims to provide a similarity measure for character sequences\n    (such as text), making it useful in areas like text similarity analysis,\n    Optical Character Recognition (OCR), and Natural Language Processing (NLP).\n\n    This class inherits from `Metric` and uses the `EditDistance` class to\n    compute the Levenshtein distance.\n\n    Inputs to the ``update`` and ``compute`` methods are as follows:\n\n    - ``preds`` (:class:`~Union[str, Sequence[str]]`):\n        Predicted text sequences or a collection of sequences.\n    - ``target`` (:class:`~Union[str, Sequence[str]]`):\n        Target text sequences or a collection of sequences.\n\n    Output from the ``compute`` method is as follows:\n\n    - ``nls`` (:class:`~torch.Tensor`): A tensor containing the NLS value.\n        Returns 0.0 when there are no samples; otherwise, it returns the NLS.\n\n    Args:\n        substitution_cost:\n            The cost of substituting one character for another. Default is 1.\n        reduction:\n            Method to aggregate metric scores.\n            Default is \'mean\', options are \'sum\' or None.\n\n            - ``\'mean\'``: takes the mean over samples, which is ANLS.\n            - ``\'sum\'``: takes the sum over samples\n            - ``None`` or ``\'none\'``: returns the score per sample\n\n        kwargs: Additional keyword arguments.\n\n    Example::\n        Multiple strings example:\n\n        >>> metric = NormalizedLevenshteinSimilarity(reduction=None)\n        >>> preds = ["rain", "lnaguaeg"]\n        >>> target = ["shine", "language"]\n        >>> metric(preds, target)\n        tensor([0.4000, 0.5000])\n        >>> metric = NormalizedLevenshteinSimilarity(reduction="mean")\n        >>> metric(preds, target)\n        tensor(0.4500)\n    """\n\n    def __init__(\n        self,\n        substitution_cost: int = 1,\n        reduction: Optional[Literal["mean", "sum", "none"]] = "mean",\n        **kwargs: Any\n    ) -> None:\n        super().__init__(**kwargs)\n        self.edit_distance = EditDistance(\n            substitution_cost=substitution_cost,\n            reduction=None  # Set to None to get distances for all string pairs\n        )\n\n        allowed_reduction = (None, "mean", "sum", "none")\n        if reduction not in allowed_reduction:\n            raise ValueError(\n                f"Expected argument `reduction` to be one of {allowed_reduction}, but got {reduction}")\n        self.reduction = reduction\n\n        if self.reduction == "none" or self.reduction is None:\n            self.add_state(\n                "nls_values_list",\n                default=[],\n                dist_reduce_fx="cat"\n            )\n        else:\n            self.add_state(\n                "nls_score",\n                default=torch.tensor(0.0),\n                dist_reduce_fx="sum"\n            )\n            self.add_state(\n                "num_elements",\n                default=torch.tensor(0),\n                dist_reduce_fx="sum"\n            )\n\n    def update(self, preds: Union[str, Sequence[str]], target: Union[str, Sequence[str]]) -> None:\n        """Update state with predictions and targets."""\n        if isinstance(preds, str):\n            preds = [preds]\n        if isinstance(target, str):\n            target = [target]\n\n        distances = self.edit_distance(preds, target)\n        max_lengths = torch.tensor([\n            max(len(p), len(t))\n            for p, t in zip(preds, target)\n        ], dtype=torch.float)\n\n        ratio = torch.where(\n            max_lengths == 0,\n            torch.zeros_like(distances).float(),\n            distances.float() / max_lengths\n        )\n\n        nls_values = 1 - ratio\n\n        if self.reduction == "none" or self.reduction is None:\n            self.nls_values_list.append(nls_values)\n        else:\n            self.nls_score += nls_values.sum()\n            self.num_elements += nls_values.shape[0]\n\n    def _compute(\n        self,\n        nls_score: Tensor,\n        num_elements: Union[Tensor, int],\n    ) -> Tensor:\n        """Compute the ANLS over state."""\n        if nls_score.numel() == 0:\n            return torch.tensor(0, dtype=torch.int32)\n        if self.reduction == "mean":\n            return nls_score.sum() / num_elements\n        if self.reduction == "sum":\n            return nls_score.sum()\n        if self.reduction is None or self.reduction == "none":\n            return nls_score\n\n    def compute(self) -> torch.Tensor:\n        """Compute the NLS over state."""\n        if self.reduction == "none" or self.reduction is None:\n            return self._compute(dim_zero_cat(self.nls_values_list), 1)\n        return self._compute(self.nls_score, self.num_elements)\n\n\nif __name__ == "__main__":\n    anls = NormalizedLevenshteinSimilarity(reduction=\'mean\')\n    preds = ["rain", "lnaguaeg"]\n    target = ["shine", "language"]\n    print(anls(preds, target))\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://lightning.ai/docs/torchmetrics/stable/text/edit.html",children:(0,s.jsx)(n.strong,{children:"torchmetrics.text.EditDistance"})})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},65475:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/0516-0a6a6660c35203eb7984bbb873ead9cc.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);