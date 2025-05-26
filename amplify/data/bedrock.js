export function request(ctx) {
  const { interest = [] } = ctx.args;
  const prompt = `Ask 3 different questions using these interests: ${interest.join(" ")}.$`;

  return {
    resourcePath: "/model/anthropic.cluade-3-sonnet-20240229-v1:0/invoke",
    method: "POST",
    params: {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_token: 1000,
        message: [
          {
            roile: "user",
            content: [
              {
                type: "text",
                text: `\n\nHuman: ${prompt}\n\nAssistant:`,
              },
            ],
          },
        ],
      }),
    },
  };
}

export function response(ctx) {
    const parsedBody = JSON.parse(ctx.result.body);
    const res = {
        body: parsedBody.content[0].text,
    };
    return res;
}