import os
import deepl
import dotenv

def translate_text(target_lang, text, context=None):
    """
    Translates text using DeepL API.
    Loads environment variables from .env.local if present.
    
    Args:
        target_lang (str): Target language code (e.g., 'DE', 'FR', 'ES')
        text (str): Text to translate
        context (str, optional): Context to improve translation quality
        
    Returns:
        str: Translated text
        
    Raises:
        ValueError: If DeepL API key is missing or input parameters are invalid
        Exception: If translation fails
    """
    if target_lang == "pt":
        target_lang = "pt-PT"
    # Load environment variables from .env.local if it exists
    env_file = '../.env.local'
    if os.path.exists(env_file):
        dotenv.load_dotenv(env_file)
    
    # Get the DeepL API key from environment variables
    auth_key = os.getenv("DEEPL_API_KEY", "7e78c956-fdfb-4f69-bf9c-c087267ae73a:fx")
    if not auth_key:
        raise ValueError("DEEPL_API_KEY is missing in environment variables")
    
    # Validate input parameters
    if not text:
        raise ValueError("Text to translate cannot be empty")
    if not target_lang:
        raise ValueError("Target language cannot be empty")
    
    # Initialize DeepL translator and perform translation
    deepl_client = deepl.DeepLClient(auth_key)
    translation_kwargs = {
        "text": text,
        "source_lang": "EN",  # Default source language
        "target_lang": target_lang
    }
    
    # Add context if provided
    if context:
        translation_kwargs["context"] = context
    
    # Perform translation
    result = deepl_client.translate_text(**translation_kwargs)
    
    # Return only the translated text
    return result.text