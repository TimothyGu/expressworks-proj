#!/usr/bin/env node
/*
 * Solution to "Param Pam Pam" exercise
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
 * The hints should be all you need.
 */

var express = require('express')
var app     = express()

app.put('/message/:id', function(req, res) {
    res.send(
        // Send the text with the snippet given in the hints.
        require('crypto')
            .createHash('sha1')
            .update(new Date().toDateString() +
                  // This is the catch, req.params is an object
                  // containing all the params in the PUT request.
                  // The params are declared in the `/message/:id`.
                  req.params.id)
            .digest('hex')
    )
    res.end()
})

app.listen(Number(process.argv[2]))
