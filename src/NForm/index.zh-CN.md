---
nav:
  title: 表单
  path: /components
---

## NForm

Demo:

```tsx
import React from 'react';
import { NForm } from 'dumi-template';

enum FormType {
  Input = 'Input',
  Select = 'Select',
  TextArea = 'TextArea',
  UploadImg = 'UploadImg',
}
const fields = [
  {
    type: FormType.Input,
    label: '名称',
    name: 'name',
    // children: <Input />,
    placeholder: '请输入名称',
    rules: [
      { required: true, message: '请输入名称' },
      { type: 'string', max: 6, message: '最多输入六个中文字符' },
    ],
  },
  {
    type: FormType.Select,
    label: '所属分组',
    name: 'portalGroupId',
    placeholder: '请选择所属分组',

    // children: <Input />,
    rules: [{ required: true, message: '请选择所属分组' }],
    options: [],
  },
  {
    type: FormType.TextArea,
    label: '描述',
    name: 'description',
    placeholder: '请输入描述',

    // children: <Input.TextArea />,
  },
  {
    type: FormType.UploadImg,
    label: '门户图标',
    name: 'logoUrl',
    rules: [{ required: true, message: '请上传门户图标' }],
    extra: '支持拓展名jpg/png的小于5mb的图片',
    // children: <Input.TextArea />,
  },
];

export default () => <NForm fields={fields} />;
```

[更多技巧](https://d.umijs.org/guide/demo-principle)
