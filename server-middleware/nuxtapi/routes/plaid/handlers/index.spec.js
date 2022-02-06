import apos from "./index";
const axios = require("../../../axios/apos");

// jest.mock('axios')
axios.get = jest.fn();
axios.delete = jest.fn();
axios.post = jest.fn();
axios.put = jest.fn();

const req = {
  query: {
    render: "home",
  },
  params: ["/abc"],
  body: {},
};
const res = {
  status(value) {
    jest.fn();
    return this;
  },
  send: jest.fn(),
};
const next = null;

let data;

describe("apos handlers", () => {
  it("Check number of handlers", () => {
    expect(Object.keys(apos).length).toEqual(2);
  });

  let uri;
  describe("getMethods", () => {
    beforeEach(() => {
      data = {
        data: {
          success: true,
        },
      };

      axios.get.mockImplementationOnce(() => Promise.resolve(data));
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    for (const item in apos) {
      if (!item.includes("get")) {
        continue;
      }
      it(`Tests ${item}`, async () => {
        switch (item) {
          case "getNav":
            uri = "modules/apostrophe-pages/nuxt-pages";
            break;
          case "getPage":
            uri = `api/v1/apostrophe-pages${req.params[0]}?render=${req.query.render}`;
            break;
          default:
            throw new Error("Unrecognized GET");
        }
        await apos[item](req, res, next);
        expect(axios.get).toHaveBeenCalledWith(uri);
        expect(res.send).toHaveBeenCalled();
      });
    }
  });
});
