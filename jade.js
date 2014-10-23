#!/usr/bin/env node
/*
 * Solution to "Jade" exercise
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
 * Jade is an engine that reads a very simple template file and generates HTML
 * Provided we already learned how to use Express.js, this is not much of a
 * challenge with the help of the hints provided.
 */

var express = require('express')                                              
var app = express()

// We need to set the engine to 'jade'
app.set('view engine', 'jade')

// The directory with the templates are stored in process.argv[3]
app.set('views', process.argv[3])

// The problem says that the jade file is provided as 'index', rendered to 
// URL '/home'.
app.get('/home', function(req, res) {
    // Rather than `end()` with plain text, we use the `render()` function
    // that invokes jade itself.
    res.render('index', { date: new Date().toDateString() })
})

// Port is specified by `process.argv[2]`
app.listen(Number(process.argv[2]))
