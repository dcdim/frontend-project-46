### Hexlet tests and linter status:
[![Actions Status](https://github.com/dcdim/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/dcdim/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/b3c30ce71961880617ec/maintainability)](https://codeclimate.com/github/dcdim/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/b3c30ce71961880617ec/test_coverage)](https://codeclimate.com/github/dcdim/frontend-project-46/test_coverage)



<h3>Description</h3>
<p>This project is a console utility to compare two objects. Objects are read only from JSON, YML and YAML files.</p>

<h3>Installation</h3>

<ul>
  <li>git clone https://github.com/dcdim/frontend-project-46.git</li>
  <li>make install</li>
</ul>

<h3>Usage</h3>

<code>gendiff -h

  Usage: gendiff [options] <filepath1> <filepath2>

  Compares two configuration files and shows a difference.

  Options:
    -V, --version        output the version number
    -f, --format [type]  output format
    -h, --help           output usage information</code>

<p>The program is able to output differences in three formats: stylish(default), plain and json. To output the result according to a specific format, type -f [format]:</p>

<code>gendiff -f stylish file1.json file2.yaml
gendiff -f plain file1.json file2.yaml
gendiff -f json file1.json file2.yaml</code>

<h3>Example of work</h3>

[![asciicast](https://asciinema.org/a/V2XDkLhEzO2kpMqCMn2Nd6uo8.svg)](https://asciinema.org/a/V2XDkLhEzO2kpMqCMn2Nd6uo8)