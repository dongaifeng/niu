---
group:
  title: 基础
nav:
  title: 组件
  path: /components
---

## SearchTable

Demo:

```tsx
import React from 'react';
import { SearchTable } from 'niu';
import { Select, Input, Button, Form, Space, Upload, Table, Tag } from 'antd';

enum FormType {
  Input = 'Input',
  Select = 'Select',
  TextArea = 'TextArea',
  UploadImg = 'UploadImg',
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

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

export default () => <SearchTable columns={columns} fields={fields} />;
```

[更多技巧](https://d.umijs.org/guide/demo-principle)
