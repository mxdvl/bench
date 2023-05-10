import {
  dirname,
  fromFileUrl,
} from "https://deno.land/std@0.186.0/path/mod.ts";
import { serveDir } from "https://deno.land/std@0.186.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.186.0/http/server.ts";

serve((req) => {
  //   const pathname = new URL(req.url).pathname;

  return serveDir(req, {
    fsRoot: dirname(fromFileUrl(import.meta.resolve("./index.html"))),
  });
});
