# Angular 2 Beta to Rc alias
Alias Angular 2 beta.17 3rd party modules to Angular 2 rc.1 modules


`webpack`
```
  resolve: {
    alias: {
      'angular2': path.join(__dirname, 'node_modules', '@angularclass', 'angular2-beta-to-rc-alias', 'dist', 'beta-17'),
    },
  },
```
`typings 1.0.x`
```
typings install file:./node_modules/@angularclass/angular2-beta-to-rc-alias/src/beta-17/typings.d.ts --global --save
```

___

enjoy — **AngularClass**

<br><br>

[![AngularClass](https://cloud.githubusercontent.com/assets/1016365/9863770/cb0620fc-5af7-11e5-89df-d4b0b2cdfc43.png  "Angular Class")](https://angularclass.com)
##[AngularClass](https://angularclass.com)
> Learn AngularJS, Angular 2, and Modern Web Development from the best.
> Looking for corporate Angular training, want to host us, or Angular consulting? patrick@angularclass.com

# License
 [MIT](/LICENSE)
