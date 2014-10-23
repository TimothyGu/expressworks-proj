#!/usr/bin/env node
/*
 * Solution to "Good old form" exercise
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
 * The hints give you pretty much all the info you need.
 */

// Require express (duh...) and body-parser, which parses the special format
// of posted text.
var express = require('express')
var bodyParser = require('body-parser')

var app     = express()

// Insert middleware that parses the body before reading it through the post().
// The `extended: false` tells urlencoded() to not use extended syntaxes when
// parsing the text.
app.use('/form', bodyParser.urlencoded({ extended: false }))

// Reading and transforming the request.
app.post('/form', function(req, res) {
    // Send the reversed String to response.
    res.send(req.body.str.split('').reverse().join(''))
    res.end()
})

// Port is specified by `process.argv[2]`
app.listen(Number(process.argv[2]))
