#!/usr/bin/env node
/*
 * Solution to "Stylish CSS" exercise
 * Copyright (c) 2014, Tiancheng "Timothy" Gu
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/*
 * Before executing this, you have to make sure permissions are set correctly,
 * or the workshopper doesn't work:
 *     chmod -R 0777 \
 *     /usr/local/lib/node_modules/expressworks/problems/stylish_css/public
 */

var express = require('express')                                              
var app = express()

// Require stylus CSS generator
var stylus = require('stylus')

// Add middleware that parses stylus stylesheets
app.use(stylus.middleware(process.argv[3]))

// Middleware that serves everything else.
app.use(express.static(process.argv[3]))

// Port is specified by `process.argv[2]`
app.listen(Number(process.argv[2]))
