ti-htmlparser2
==============

[![Dependencies](https://david-dm.org/yuchi/ti-htmlparser2/status.svg?style=flat-square)](https://david-dm.org/yuchi/ti-htmlparser2#info=dependencies)
[![Dev Dependencies](https://david-dm.org/yuchi/ti-htmlparser2/dev-status.svg?style=flat-square)](https://david-dm.org/yuchi/ti-htmlparser2#info=devDependencies)

Titanium.Network.HTTPClient with less suck!

This is a [titaniumified][ti] version of [htmlparser2][hp2]. This is built using [`grunt-titaniumifier`][gti].

[ti]: https://github.com/smclab/titaniumifier
[gti]: https://github.com/smclab/grunt-titaniumifier


### Installation

A packaged *CommonJS* module can be found in the [Releases page][rls].

[rls]: https://github.com/yuchi/ti-htmlparser2/releases


Usage overview
--------------

For the full documentation head over the [original repository][hp2].

```js
var htmlparser = require("htmlparser2");
var parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
        if(name === "script" && attribs.type === "text/javascript"){
            console.log("JS! Hooray!");
        }
    },
    ontext: function(text){
        console.log("-->", text);
    },
    onclosetag: function(tagname){
        if(tagname === "script"){
            console.log("That's it?!");
        }
    }
});
parser.write("Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>");
parser.end();
```

Outputs:

```
--> Xyz
JS! Hooray!
--> var foo = '<<bar>>';
That's it?!
```

Credits
-------

Kudos to [@fb55][fb55] for building [htmlparser2][hp2] in the first place.

[fb55]: https://github.com/fb55
[hp2]: https://github.com/fb55/htmlparser2

Humbly made by the spry ladies and gents at SMC.


License
-------

This library, *ti-htmlparser2*, is free software ("Licensed Software"); you can
redistribute it and/or modify it under the terms of the [GNU Lesser General
Public License](http://www.gnu.org/licenses/lgpl-2.1.html) as published by the
Free Software Foundation; either version 2.1 of the License, or (at your
option) any later version.

This library is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; including but not limited to, the implied warranty of MERCHANTABILITY,
NONINFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
Public License for more details.

You should have received a copy of the [GNU Lesser General Public
License](http://www.gnu.org/licenses/lgpl-2.1.html) along with this library; if
not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth
Floor, Boston, MA 02110-1301 USA
