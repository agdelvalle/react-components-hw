```jsx
<div className="flex gap-4">
  <Button>Default</Button>
  <Button variant="primary">Primary</Button>
  <Button variant="outline">Outline</Button>
  <Button render={(btnprops) => {<a {btnprops} href="google.com"></a>}}></Button>
</div>
```

