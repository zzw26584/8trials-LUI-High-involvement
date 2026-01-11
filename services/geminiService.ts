
import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

// Always initialize with the direct process.env.API_KEY variable as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHotelRecommendation = async (
  query: string,
  products: Product[],
  taskInstruction: string,
  objectCount: number
) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `当前任务背景: "${taskInstruction}"\n待比较商品总数: ${objectCount}\n用户最新需求: "${query}"\n\n可选商品列表:\n${JSON.stringify(products, null, 2)}`,
      config: {
        systemInstruction: `你是一个专业的决策辅助助手。你的任务是根据用户的需求和当前任务背景，在提供的备选商品列表中进行深度权衡分析（Trade-off Analysis）。

        分析与回复规则（极其重要）：
        1. 筛选规则：你必须且只能挑选出 EXACTLY 2 个（正好 2 个）最值得对比的商品 ID 放入 candidates 列表。不要少于 2 个，也不要多于 2 个。你的分析文本（analysis）必须围绕这 2 个商品展开对比。
        2. 开场白限制：回复的 analysis 字段必须以“我在平台上比较了 ${objectCount} 款[商品类别]（例如：酒店/手机/电瓶车/西装/燕窝礼盒等）”作为第一句话。
        3. 严禁引用 ID：在 analysis 字段的自然语言描述中，禁止出现任何内部商品 ID（如 p1, h2 等）。请统一使用商品的完整“名称（name）”。
        4. 推荐结论：最后在 recommendationId 中锁定这 2 个候选商品中最好的一个 ID。

        输出格式必须是严格的 JSON。`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { 
              type: Type.STRING, 
              description: "详细的对比和权衡过程。必须以‘我在平台上比较了 n 款...’开头。围绕筛选出的 2 个商品进行优劣势对比。" 
            },
            candidates: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "务必包含正好 2 个商品 ID。"
            },
            recommendationId: {
              type: Type.STRING, 
              description: "最终推荐的商品 ID。"
            },
            recommendationSlogan: {
              type: Type.STRING,
              description: "一句简洁的推荐语，概括其核心优势。"
            }
          },
          required: ["analysis", "candidates", "recommendationId", "recommendationSlogan"]
        }
      }
    });

    // Access the .text property directly and trim it to get the string output
    const jsonStr = response.text?.trim();
    return jsonStr ? JSON.parse(jsonStr) : null;
  } catch (error) {
    console.error("Gemini Trade-off Analysis Error:", error);
    return null;
  }
};
