# Alda's Superheading Block

Add accessible headings for the WordPress Block Editor with superheadings and subheadings.

If you want to get things right, headings can get tricky when you have both subheadings and an overheading above the main heading.

Current web standards recommend the use of the `<hgroup>` element but this block demonstrates the use of plain-and-simple heading elements, maintains the heading hierarchy and ensures accessibility, while also facilitating typographical hierarchy.

## Downloads

Zip-builds are provided under [Releases](https://github.com/aldavigdis/superheading-block/releases).

## Building and Developing

### Installing dependencies

1. Using PHP Composer, run `composer install`
2. Then install the NPM dependencies using `npm install`

### Developing

1. Using `docker-compose up -d`, you can build a Dockpress development environment that serves a test site at [localhost:80](http://localhost/).
2. Using NPM, run `npm start` to automatically build the plugin

### Packaging

1. Using PHP Compose, run `composer zip:release` to build your zip file after installing the dependencies

## License

This plugin is provided to you as free software under the GPLv3 license. Runtime dependencies are provided under the MIT and Apache licenses, which are compatible with the GPLv3.

Alda's Superheading Block

Copyright (C) 2025 Alda Vigdís Skarphéðinsdóttir

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
