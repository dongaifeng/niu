---
group:
  title: 基础
nav:
  title: 组件
  path: /components
---

## NForm

Demo:

```tsx
import React from 'react';
import { NForm } from 'niu';

enum FormType {
  Input = 'Input',
  Select = 'Select',
  TextArea = 'TextArea',
  UploadImg = 'UploadImg',
}
const fields = [
  {
    type: FormType.Input,
    label: '输入框',
    name: 'name',
    placeholder: '请输入',
    rules: [
      { required: true, message: '请输入内容' },
      { type: 'string', max: 6, message: '最多输入六个中文字符' },
    ],
  },
  {
    type: FormType.Select,
    label: '下拉框',
    name: 'portalGroupId',
    placeholder: '请选择',
    rules: [{ required: true, message: '请选择所属分组' }],
    options: [],
  },
  {
    type: FormType.TextArea,
    label: '描述',
    name: 'description',
    placeholder: '请输入',
  },
];

export default () => <NForm fields={fields} />;
```

[更多技巧](https://d.umijs.org/guide/demo-principle)
