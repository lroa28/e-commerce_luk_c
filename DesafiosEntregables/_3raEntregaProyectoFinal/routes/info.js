const CPUs = require("os").cpus().length;
const v8 = require("v8");

//gzip compression
const compression = require("compression");

// import router
const { Router } = require("express");
const router = new Router();

const information = (req, res) => {
    const info = {
      args: process.args,
      title: process.title,
      uptime: process.uptime(),
      platform: process.platform,
      arch: process.arch,
      version: process.version,
      pid: process.pid,
      path: process.execPath,
      projectPath: process.cwd(),
      CPUs: CPUs,
      cpuUsage: process.cpuUsage(),
      memoryUsage: process.memoryUsage(),
      v8motor: v8.getHeapStatistics()
    };

  res.send(JSON.stringify(info));
};

router.get("/", information);
router.get("/zip", compression(), information);

module.exports = router;
